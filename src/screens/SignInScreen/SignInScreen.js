import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignInScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    try {
      if(!email || !password)
      {
        alert("Please enter all the required fields")
      }
      else {
         axios.post(`https://bf88-2800-e2-1a00-9a37-f498-c030-b263-72ad.ngrok.io/api/login`, {email: email, password: password})
         .then(response => {
           
           console.log(response.data);
           if(response.data.status)
           {  
              navigation.navigate("HomeScreen")
           }
           else{
             console.log(response.data.messages)
             let errorEmailMsg = response.data.messages.email ? response.data.messages.email[0] : "",
             errorPassMsg = response.data.messages.password ? response.data.messages.password[0] : ""
  
             setError({errorEmail: errorEmailMsg, errorPassword:errorPassMsg, errorName:""});
           }
          })
        }
    } catch (error) {
      console.log(error);
    }
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed")
    navigation.navigate("ForgotPassword")
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.logo, {height: height * 0.3}]} 
      resizeMode="contain"/>

      <CustomInput 
       placeholder={"Email"}
       value={email}
       setValue={setEmail}
      />

      <CustomInput 
       placeholder={"Password"}
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />

       <CustomButton text="Sign In" onPress={onSignInPressed}/>
       <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
       />

      <SocialSignInButtons/>

       

       <CustomButton 
        text="Dont have an account? Create one" 
        onPress={onSignUpPress}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
})



export default SignInScreen