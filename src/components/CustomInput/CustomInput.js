import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue , placeholder , secureTextEntry}) => {
  return (
    <View style={styles.constainer}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}/>
    </View>
  );
};

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: "#615e5c",
        width: "100%",

        borderColor: "#017e01",
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {},
})

export default CustomInput