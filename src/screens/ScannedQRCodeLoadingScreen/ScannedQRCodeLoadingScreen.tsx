import React, {useCallback, useEffect} from 'react';
import {showMessage} from 'react-native-flash-message';
import SendSMS, {AndroidSuccessTypes} from 'react-native-sms';
import Box from '../../atoms/Box/Box';
import Text from '../../atoms/Text/Text';
import useValidateNameParam from '../../hooks/useValidateNameParam';
import {HomeStackNavProps} from '../../navigators/Home/RouteTypes';
import BaseLayout from '../../organisms/BaseLayout/BaseLayout';

type ScanQRRequestResponseType = {
  data: {
    message: string;
    dish: string;
    phoneNumber: string;
  };
};

type Props = HomeStackNavProps<'ScannedQRCodeLoading'>;

const ScannedQRCodeLoadingScreen = ({navigation, route}: Props) => {
  const name = route.params?.name;
  const code = route.params?.code;
  useValidateNameParam(navigation, name);

  const generateAndSendSMS = useCallback(
    (phoneNumber: string, message: string) => {
      SendSMS.send(
        {
          body: message.replace(/{{.*?}}/g, name),
          recipients: [phoneNumber],
          successTypes: ['sent', 'queued'] as AndroidSuccessTypes[],
          allowAndroidSendWithoutReadPermission: true,
        },
        () => {
          // go to the main screen
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        },
      );
    },
    [name, navigation],
  );

  const callService = useCallback(async () => {
    try {
      const response = await fetch(
        'https://scan-and-go-backend.herokuapp.com/api/scan-qr',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code,
            name,
          }),
        },
      );
      const {data}: ScanQRRequestResponseType = await response.json();
      generateAndSendSMS(data.phoneNumber, data.message);
    } catch (error) {
      console.log('error', error);
      showMessage({
        message: (error as any).message,
        type: 'danger',
      });
      navigation.goBack();
    }
  }, [code, generateAndSendSMS, name, navigation]);

  useEffect(() => {
    if (!code || isNaN(parseInt(code, 10))) {
      // show error and return back to the main screen
      showMessage({
        message: 'Scanned QR code is not valid code, try again.',
        type: 'danger',
      });
      navigation.goBack();
      return;
    } else {
      // call api service to get the message and phone number
      // {"bounds": {"height": 1080, "origin": [[Object], [Object], [Object]], "width": 1440}, "data": "2", "rawData": "100480ec11ec11ec11", "target": 139, "type": "QR_CODE"}
      callService();
    }
  }, [callService, code, name, navigation]);

  return (
    <BaseLayout>
      <Box
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        paddingHorizontal={'l'}>
        <Text
          variant={'heading1'}
          textAlign={'center'}
          color={'blackLight'}
          marginBottom={'l'}>
          Loading...
        </Text>
        <Text variant={'bodyLight'} textAlign={'center'} color={'blackLight'}>
          Hi <Text fontWeight={'700'}>{name}</Text>, Please wait while your
          message is generating, Thank You.
        </Text>
      </Box>
    </BaseLayout>
  );
};

export default ScannedQRCodeLoadingScreen;
