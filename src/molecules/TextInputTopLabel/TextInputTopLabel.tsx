import {useField} from 'formik';
import React from 'react';
import Box from '../../atoms/Box/Box';
import Text from '../../atoms/Text/Text';
import TextInput, {TextInputProps} from '../../atoms/TextInput/TextInput';

type TextInputTopLabelProps = {
  label: string;
} & TextInputProps;

export default ({label, ...props}: TextInputTopLabelProps) => {
  const [_, meta] = useField(props.textInput?.name || '');
  const errorText = meta.touched && meta.error ? meta.error : '';
  return (
    <Box borderColor="grayLight" borderWidth={1} borderRadius={8} padding="m">
      <Text variant="inputSmallLabel" opacity={0.71}>
        {label}
      </Text>
      <TextInput {...props} />
      {!!errorText && (
        <Text variant="inputSmallLabel" color="error">
          {errorText}
        </Text>
      )}
    </Box>
  );
};
