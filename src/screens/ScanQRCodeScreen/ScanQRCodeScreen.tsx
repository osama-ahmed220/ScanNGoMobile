import React, {useCallback} from 'react';
import {Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import useValidateNameParam from '../../hooks/useValidateNameParam';
import {HomeStackNavProps} from '../../navigators/Home/RouteTypes';
import BaseLayout from '../../organisms/BaseLayout/BaseLayout';

type Props = HomeStackNavProps<'ScanQRCode'>;

const ScanQRCodeScreen = ({route, navigation}: Props) => {
  const name = route.params?.name;
  useValidateNameParam(navigation, name);

  const onSuccess = useCallback(
    (e: any) => {
      const code = e.data as string;
      navigation.navigate('ScannedQRCodeLoading', {
        name,
        code,
      });
    },
    [name, navigation],
  );

  return (
    <BaseLayout>
      <QRCodeScanner
        onRead={onSuccess}
        cameraStyle={{
          height: Dimensions.get('window').height,
        }}
      />
    </BaseLayout>
  );
};

export default ScanQRCodeScreen;
