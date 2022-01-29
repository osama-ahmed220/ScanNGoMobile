import React, {ComponentProps, PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Box from '../../atoms/Box/Box';

type Props = PropsWithChildren<{}> & ComponentProps<typeof Box>;

const BaseLayout = ({children, ...boxProps}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Box flex={1} backgroundColor="default" {...boxProps}>
        <>{children}</>
      </Box>
    </SafeAreaView>
  );
};

export default BaseLayout;
