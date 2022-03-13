import { View, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { Link, useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat , setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail")
  };

  const editUser = () => {
    console.warn("User edited");
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
        text="Edit User" 
        onPress={editUser}
       />

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