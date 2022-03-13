import { View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from "../../components/CustomInput"
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  
  const [code , setCode] = useState("");
  const navigation = useNavigation();



  const onConfirmPressed = () => {
    navigation.navigate("HomeScreen")
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };

  const onResendPress = () => {
    console.warn("onResendPress");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your Email</Text>

      <CustomInput 
       placeholder={"Enter your confirmation Code"}
       value={code}
       setValue={setCode}
      />
      

       <CustomButton 
        text="Confirm" 
        onPress={onConfirmPressed}
       />

       <CustomButton 
        text="Resend Code" 
        onPress={onResendPress}
        type="SECONDARY"
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



export default ConfirmEmailScreen