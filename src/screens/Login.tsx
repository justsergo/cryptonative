import React from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const Login = (): JSX.Element => {
  const navigation = useNavigation();
  const {control, watch, handleSubmit} = useForm({
    defaultValues: {login: '', password: ''},
  });

  const onSubmit = data => {
    console.log(data);
  };
  console.log(watch('login'));
  return (
    <View style={styles.screen}>
      <Text>login</Text>
      <Controller
        control={control}
        name="login"
        render={({field: {value, onChange}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Login"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {value, onChange}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Password"
          />
        )}
      />

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>LOG IN</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('registration')}
        style={styles.button}>
        <Text>Registration</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {marginTop: 10, backgroundColor: 'red', height: 30},
});

export default Login;
