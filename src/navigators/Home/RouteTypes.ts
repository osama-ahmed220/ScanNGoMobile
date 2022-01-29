import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type HomeStackRouteList = {
  Home: undefined;
  ScanQRCode: {
    name: string;
  };
  ScannedQRCodeLoading: {
    name: string;
    code: string;
  };
};

export type HomeStackNavigationProp<T extends keyof HomeStackRouteList> =
  NativeStackNavigationProp<HomeStackRouteList, T>;

export type HomeStackNavProps<T extends keyof HomeStackRouteList> =
  NativeStackScreenProps<HomeStackRouteList, T>;
