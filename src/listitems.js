import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';


const ListItems = ({items,remove}) => {
    return(
        items.map((item,i)=>(
            <Pressable
                style={{width:"100%"}}
                onPress={()=> remove(i)}
               // onLongPress={()=> alert('pressed')}
                //delayLongPress={3000}
                // onPressIn={()=> alert('in')}
                // onPressOut={()=> alert('out')}
            >
                <View 
                    key={item}
                    style={styles.listitem}
                >
                    <Text>{item}</Text>
                </View>
            </Pressable>
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

