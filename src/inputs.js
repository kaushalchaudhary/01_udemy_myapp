import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const Inputs = () => {
    const [myinput,setMyinput] = useState('');

    const onChangeInput = (event) => {
        setMyinput(event);
    }

    return(
        <TextInput
            style={styles.input}
            value={myinput}
            onChangeText={(e)=> onChangeInput(e) }
            multiline={true}
            maxLength={5}
           // editable={false}
            keyboardType="number-pad"
        />
    )
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        marginTop:20,
        padding:10,
        fontSize:20
    }
});

export default Inputs;

