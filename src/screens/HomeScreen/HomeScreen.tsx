import {Formik} from 'formik';
import React from 'react';
import * as yup from 'yup';
import Box from '../../atoms/Box/Box';
import Button from '../../atoms/Button/Button';
import TextInputTopLabel from '../../molecules/TextInputTopLabel/TextInputTopLabel';
import {HomeStackNavProps} from '../../navigators/Home/RouteTypes';
import BaseLayout from '../../organisms/BaseLayout/BaseLayout';

const FormValidationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
});

type Props = HomeStackNavProps<'Home'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <BaseLayout>
      <Box flex={1} marginTop={'l'}>
        <Formik
          initialValues={{
            fullName: '',
          }}
          validationSchema={FormValidationSchema}
          onSubmit={async values => {
            navigation.navigate('ScanQRCode', {
              name: values.fullName,
            });
          }}>
          {({handleSubmit}) => {
            return (
              <Box paddingHorizontal={'l'}>
                <Box marginBottom="m">
                  <TextInputTopLabel
                    label="Your Full Name"
                    textInput={{
                      name: 'fullName',
                    }}
                  />
                </Box>
                <Button
                  label="Scan QR"
                  onPress={handleSubmit}
                  variant="primaryButton"
                />
              </Box>
            );
          }}
        </Formik>
      </Box>
    </BaseLayout>
  );
};

export default HomeScreen;
