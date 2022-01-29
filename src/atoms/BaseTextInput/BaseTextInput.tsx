import {BoxProps, useTheme} from '@shopify/restyle';
import React, {ComponentProps, forwardRef} from 'react';
import {TextInput, TextStyle} from 'react-native';
import {Theme} from '../../utils/theme';
import Box from '../Box/Box';

export type BaseTextInputProps = {
  box?: BoxProps<Theme>;
  textInput?: ComponentProps<typeof TextInput> & TextStyle & {name: string};
};

const BaseTextInput = forwardRef<TextInput, BaseTextInputProps>(
  ({box, textInput}: BaseTextInputProps, ref) => {
    const {
      textVariants: {
        inputText: {fontSize, lineHeight},
      },
      colors,
    } = useTheme<Theme>();
    if (textInput?.onChange) {
      textInput.onChangeText = textInput.onChange as any;
      delete textInput.onChange;
    }
    return (
      <Box {...box}>
        <TextInput
          ref={ref}
          style={{
            fontSize,
            lineHeight,
            color: colors.grayDarkest,
            margin: 0,
            padding: 0,
          }}
          {...textInput}
        />
      </Box>
    );
  },
);

export default BaseTextInput;
