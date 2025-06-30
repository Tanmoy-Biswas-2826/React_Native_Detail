import React from 'react';
import { Text, View } from 'react-native';

const ValidPassword = () => <Text>Valid Password</Text>
const InvalidPassword = () => <Text>Invalid Pasword</Text>

const Password = ({isValid}) => {
    if(isValid){
        return <ValidPassword/>
    }
    return <InvalidPassword/>
};

const ConditionalStatement = () => {
  return (
    <View>
     <Password isValid={false}/>
    </View>
  )
}

export default ConditionalStatement