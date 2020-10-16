import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


const Inputs = () => {
    const [myinput,setMyinput] = useState('');
    const [names,setNames] = useState(['John','James','ron','lisa','mike'])

    const onChangeInput = (event) => {
        setMyinput(event);
    }

    const onAddUser = () => {
        const newState = [...names, myinput];
        setNames(newState);
        setMyinput('');
    }

    return(
        <>
            <TextInput
                style={styles.input}
                value={myinput}
                onChangeText={(e)=> onChangeInput(e) }
                multiline={true}
                maxLength={5}
            // editable={false}
                //keyboardType="number-pad"
            />
            <Button
                title="Add user"
                onPress={onAddUser}
            />
            <View>
                {names.map(name=>(
                    <Text 
                        style={styles.user}
                        key={name}
                    >
                        {name}
                    </Text>
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        marginTop:20,
        padding:10,
        fontSize:20
    },
    user:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#cecece',
        padding:10,
        marginBottom:20
    }
});

export default Inputs;

