import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {logIn} from '../store/reducers/userReducer';
import Input from '../components/Input';
import {Press} from '../components/Press';

const Login = (): JSX.Element => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    control,
    watch,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    defaultValues: {login: '', password: ''},
  });

  const onSubmit = (data: string) => {
    dispatch(logIn(data));
  };
  console.log(watch('login'));
  return (
    <View style={styles.screen}>
      <Text>login</Text>
      <Controller
        control={control}
        name="login"
        rules={{required: true}}
        render={({field: {value, onChange}}) => (
          <Input onChangeText={onChange} value={value} placeholder="Login" />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{required: false}}
        render={({field: {value, onChange}}) => (
          <Input onChangeText={onChange} value={value} placeholder="Password" />
        )}
      />

      <Press disabled={!isValid} onPress={handleSubmit(onSubmit)}>
        <Text>LOG IN</Text>
      </Press>

      <Press onPress={() => navigation.navigate('registration')}>
        <Text>Registration</Text>
      </Press>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
