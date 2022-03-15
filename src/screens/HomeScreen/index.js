import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
const HomeScreen = () => {

  const editUser = () => {
    console.warn("User edited");
  };

  return (
    <View>
      <Text style={{ fontSize: 24, alignSelf: "center", color: "black" }}>Home, sweet home</Text>

      <CustomButton 
        text="Edit User" 
        onPress={editUser}
       />

    </View>
  )
}

export default HomeScreen