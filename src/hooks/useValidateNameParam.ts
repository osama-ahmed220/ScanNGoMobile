import {useEffect} from 'react';
import {showMessage} from 'react-native-flash-message';

const useValidateNameParam = (navigation: any, name?: string) => {
  useEffect(() => {
    if (!name) {
      showMessage({
        message: 'Full Name is required.',
        type: 'danger',
      });
      navigation.goBack();
    }
  }, [name, navigation]);
};

export default useValidateNameParam;
