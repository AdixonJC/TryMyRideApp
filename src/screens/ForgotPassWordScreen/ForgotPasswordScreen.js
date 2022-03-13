import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  
  const [username , setUsername] = useState("");


  const navigation = useNavigation();




  const onSendPressed = () => {
    navigation.navigate("NewPassword")
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput 
       placeholder={"Username"}
       value={username}
       setValue={setUsername}
      />
      

       <CustomButton 
        text="Send" 
        onPress={onSendPressed}
       />

       <CustomButton 
        text="Back to Sign in" 
        onPress={onSignInPress}
        type="TERTIARY"
       />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#019501",
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  }
})



export default ForgotPasswordScreen