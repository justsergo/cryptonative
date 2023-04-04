import React from 'react';
import {View, Modal, StyleSheet, FlatList, Text, Pressable} from 'react-native';
import {List} from '../types/mainTypes';

type Props = {
  isOpen: boolean;
  data: List[];
  close: (arg: boolean) => void;
};

const SomeModal = ({isOpen = false, data, close}: Props): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Modal
        style={styles.modal}
        transparent={false}
        visible={isOpen}
        animationType="slide">
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.text}>
                <Text>{item.title}</Text>
              </View>
            )}
            keyExtractor={({id}) => id}
          />
          <Text>ygh;ll</Text>
        </View>
      </Modal>
      <Pressable onPress={() => close(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'red',
    width: '100px',
    height: '100px',
  },
  text: {
    fontSize: 18,
  },
});

export default SomeModal;
