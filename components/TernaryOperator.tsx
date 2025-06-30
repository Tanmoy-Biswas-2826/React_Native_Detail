import React from 'react';
import { Text, View } from 'react-native';

const ValidPassword = () => <Text>Valid Password</Text>
const InvalidPassword = () => <Text>Invalid Pasword</Text>

const Password = ({isValid}) => {
   return isValid ? <ValidPassword/> : <InvalidPassword/>
};

const TernaryOperator = () => {
  return (
    <View>
     <Password isValid={false}/>
    </View>
  )
}

export default TernaryOperator