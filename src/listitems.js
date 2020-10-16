import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const ListItems = ({items}) => {
    return(
        items.map((item)=>(
            <View style={styles.listitem}>
                <Text>{item}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    listitem:{
        backgroundColor:'#cecece',
        alignItems:'center',
        padding:10,
        marginTop:5,
        width:'100%'
    }
});

export default ListItems;

