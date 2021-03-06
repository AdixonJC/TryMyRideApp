import { View, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat , setPasswordRepeat] = useState("");
  const [errorMessage, setError] = useState({errorEmail:"", errorPassword:"", errorName:""})
  
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    try {
      if(!username || !email || !password || !passwordRepeat)
       alert('Please enter all the required fields', {name:username,email:email, password:password})
       else {
       axios.post(`https://13d7-2800-e2-1a00-9a37-f498-c030-b263-72ad.ngrok.io/api/register`, {name: username, email: email, password: password})
         .then(response => {
            console.log(response.data.token);
          })
        }
      } catch (error) {
        console.log(error);
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
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
      />

      <CustomInput 
       placeholder={"Repeat Password"}
       value={passwordRepeat}
       setValue={setPasswordRepeat}
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