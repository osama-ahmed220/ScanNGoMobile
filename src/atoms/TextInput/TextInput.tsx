import {BoxProps} from '@shopify/restyle';
import {useFormikContext} from 'formik';
import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Theme} from '../../utils/theme';
import BaseTextInput from '../BaseTextInput/BaseTextInput';

export type TextInputProps = {
  box?: BoxProps<Theme>;
  textInput?: RNTextInputProps & TextStyle & {name: string};
};

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({box, textInput}: TextInputProps, ref) => {
    const {handleBlur, handleChange} = useFormikContext();
    return (
      <BaseTextInput
        ref={ref}
        {...{box}}
        textInput={{
          name: textInput?.name || '',
          ...textInput,
          onChangeText: handleChange(textInput?.name),
          onBlur: handleBlur(textInput?.name || ''),
        }}
      />
    );
  },
);

export default TextInput;
