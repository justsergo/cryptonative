import React, {PropsWithChildren, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated as AnimatedNative,
  ViewStyle,
  Button,
  Alert,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Modal,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {List} from '../types/mainTypes';
import SomeModal from '../components/Modal';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView = (props: FadeInViewProps): JSX.Element => {
  const fadeAnim = useRef(new AnimatedNative.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    AnimatedNative.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <AnimatedNative.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </AnimatedNative.View>
  );
};

const DATA: List[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Main = (): JSX.Element => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  const [isOpenModal, toggleOpen] = useState<boolean>(false);

  return (
    <View style={styles.screen}>
      <Text>Graphs</Text>

      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => (offset.value = Math.random() * 255)}
        title="Move"
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FadeInView
          style={{
            width: 250,
            height: 50,
            backgroundColor: 'powderblue',
          }}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            Fading in
          </Text>
        </FadeInView>
      </View>

      <Button title="alertButton" onPress={() => Alert.alert('some text')} />

      <TouchableHighlight
        onPress={() => toggleOpen(true)}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={styles.modalButton}>
        <Text>open modal</Text>
      </TouchableHighlight>

      <SomeModal isOpen={isOpenModal} data={DATA} close={toggleOpen} />

      <Pressable style={styles.button}>
        <Text>Registration</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {marginTop: 10, backgroundColor: 'red', height: 30},
  modalButton: {
    margin: 20,
    backgroundColor: 'blue',
  },
});

export default Main;
