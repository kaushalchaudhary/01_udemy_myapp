import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';

const App = () => {
  const [hello, setHello] = useState(true);

  useEffect(()=>{
    // setTimeout(()=>{
    //   setHello(false)
    // },2000)
  },[])

  return(
    <View style={styles.mainView}>
      <Nav nameOfApp="Awesome app"/>
      <View style={styles.basicview}>
        <Text style={styles.basicText}>Text for view 1</Text>
      </View>
      <View style={styles.basicview}>
        <Text style={styles.basicText}>Text for view 2</Text>
      </View>
      {/* { hello ? 
        <Text>Hello everybody</Text>
        :null
      } */}
      <View>
        <Generate/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    paddingTop:50,
    alignItems:'flex-start',// center x axis
    justifyContent:'flex-start' // center y axis
  },
  basicview:{
    backgroundColor:'green',
    width:'100%',
    marginBottom: 5
  },
  basicText:{
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
    padding:20
  }
})


export default App;