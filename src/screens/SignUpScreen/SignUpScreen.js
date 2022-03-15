import { View, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {BASE_URL} from '@env'
import axios from 'axios';

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat , setPasswordRepeat] = useState("");
  const [errorMessage, setError] = useState({errorEmail:"", errorPassword:"", errorName:""})
  
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    if(!username || !email || !password || !passwordRepeat)
       alert('Please enter all the required fields', {name:username,email:email, password:password})
       else {
         navigation.navigate("ConfirmEmail") //eliminar esta navegacion para usar el backend
      
        axios.post(`${BASE_URL}/api/register`)
         .then(response => {
           if(response.data.status)
           {
              console.log(response.data.messages);
           }
           else{
             let errorEmailMsg = response.data.messages.email ? response.data.messages.email[0] : "",
             errorPassMsg = response.data.messages.password ? response.data.messages.password[0] : "",
             errorNameMsg = response.data.messages.name ? response.data.messages.name[0] : "";
             setError({errorEmail: errorEmailMsg, errorPassword:errorPassMsg, errorNameMsg})
            //  navigation.navigate("ConfirmEmail")  <------ descomentar esta navegacion para usar el backend
           }
          })
          .catch(e => console.log(e.message))
        }
  };
  

  const onSignInPress = () => {
    navigation.navigate("SignIn")
  };

  const onTermsOfUsePressed = async () => {
  await  Linking.openURL("http://www.trymyride.co/uncategorized/nuestras-politicas-han-cambiado/")
  };

  const onPrivacyPolicy = async () => {
  await  Linking.openURL("http://www.trymyride.co/uncategorized/nuestras-politicas-han-cambiado/")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput 
       placeholder={"Username"}
       value={username}
       setValue={setUsername}
      />
      <CustomInput 
       placeholder={"Email"}
       value={email}
       setValue={setEmail}
      />

      <CustomInput 
       placeholder={"Password"}
       value={passwordRepeat}
       setValue={setPasswordRepeat}
       secureTextEntry={true}
      />
      
      <CustomInput 
       placeholder={"Repeat Password"}
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />

       <CustomButton text="Register" onPress={onRegisterPressed}/>

      <Text style={styles.text}>
        By registering, you confirm that you accept our{" "} 
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{" "} 
        <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
      </Text>

      <SocialSignInButtons/>


       <CustomButton 
        text="Have an account? Sign in" 
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



export default SignUpScreen