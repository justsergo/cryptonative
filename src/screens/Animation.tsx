import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

type ContextType = {
  translateX: number;
  translateY: number;
};

const SQUARE_SIZE = 100;
const CIRCLE_RADIUS = SQUARE_SIZE * 2;

const handleSqaureRotation = (progresSquare: Animated.SharedValue<number>) => {
  'worklet';
  return `${progresSquare.value * 2 * Math.PI}rad`;
};

const Animation = (): JSX.Element => {
  //   return <Text>htrgr</Text>;
  // };
  const progresSquare = useSharedValue(1);
  const scaleSquare = useSharedValue(1);
  const progresTextX = useSharedValue(-50);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const [sqaureAnimation, setSquareAnimation] = useState<boolean>(false);

  const rSquare = useAnimatedStyle(() => {
    return {
      opacity: progresSquare.value,
      borderRadius: (progresSquare.value * SQUARE_SIZE) / 2,
      transform: [
        {scale: scaleSquare.value},
        {rotate: handleSqaureRotation(progresSquare)},
      ],
    };
  });

  const rText = useAnimatedStyle(() => {
    return {
      transform: [{translateX: progresTextX.value}],
    };
  });

  const rSquareCircle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  useEffect(() => {
    if (sqaureAnimation) {
      progresSquare.value = withRepeat(withSpring(0.3), -1, true);
      scaleSquare.value = withRepeat(withSpring(0.5), -1, true);
      progresTextX.value = withRepeat(withSpring(0), -1, true);
    }
    return () => {
      cancelAnimation(progresSquare);
      cancelAnimation(scaleSquare);
      cancelAnimation(progresTextX);
      progresSquare.value = 1;
      scaleSquare.value = 1;
      progresTextX.value = -50;
    };
  }, [sqaureAnimation, progresSquare, scaleSquare, progresTextX]);

  const handleSqaureAnimation = () => {
    setSquareAnimation(prev => !prev);
  };

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  return (
    <Animated.ScrollView style={[styles.container]}>
      <TouchableHighlight onPress={handleSqaureAnimation} style={styles.button}>
        <Text>animted square and text</Text>
      </TouchableHighlight>
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            {
              width: SQUARE_SIZE,
              height: SQUARE_SIZE,
              backgroundColor: 'purple',
            },
            rSquare,
          ]}
        />
      </View>

      <View style={styles.animationContainer}>
        <Animated.View style={[{backgroundColor: 'purple'}, rText]}>
          <Text>Animate ME!</Text>
        </Animated.View>
      </View>
      <View style={styles.animationContainer}>
        <Text style={styles.button}>animted square and text</Text>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, rSquareCircle]} />
          </PanGestureHandler>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 5,
    margin: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 256, 0.5)',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
    borderRadius: 20,
  },
});

export default Animation;
