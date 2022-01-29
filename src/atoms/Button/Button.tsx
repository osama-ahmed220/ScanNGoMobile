import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import React, {ComponentProps, ReactNode} from 'react';
import {TouchableOpacity, TouchableWithoutFeedbackProps} from 'react-native';
import {Theme} from '../../utils/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';

type BaseButtonProps = ComponentProps<typeof Box> &
  VariantProps<Theme, 'buttonVariants'>;
const BaseButton = createRestyleComponent<BaseButtonProps>(
  [createVariant({themeKey: 'buttonVariants'})],
  Box,
);

export type ButtonOnPressType = () => void;

type Props = ComponentProps<typeof BaseButton> &
  TouchableWithoutFeedbackProps & {
    label: string | ReactNode;
    onPress: ButtonOnPressType;
    buttonProps?: ComponentProps<typeof TouchableOpacity>;
  };

export default ({
  label,
  onPress,
  disabled = false,
  buttonProps,
  ...props
}: Props) => {
  return (
    <TouchableOpacity {...{onPress}} disabled={disabled} {...buttonProps}>
      <BaseButton {...props}>
        {typeof label === 'object' ? (
          label
        ) : (
          <Text variant="buttonLabel">{label}</Text>
        )}
      </BaseButton>
    </TouchableOpacity>
  );
};
