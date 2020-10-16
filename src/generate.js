import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight,TouchableOpacity } from 'react-native';

const Generate = ({add}) => (
    <TouchableOpacity
        onPress={()=> add()}
        underlayColor="blue"
        activeOpacity={0.1}
        // onHideUnderlay={()=> alert('hide')}
        // onShowUnderlay={()=> alert('show')}
    >
        <View style={styles.generate}>
            <Text style={{color:'#fff'}}>Add number</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    generate:{
        backgroundColor:'#00BCD4',
        alignItems:'center',
        padding:10,
        width:'100%'
    }
})

export default Generate;