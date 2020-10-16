import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet,ScrollView,ActivityIndicator } from 'react-native';

import Nav from './src/nav';
import Generate from './src/generate';
import ListItems from './src/listitems';
import Inputs from './src/inputs';

const App = () => {
  const [hello, setHello] = useState(true);
  const [random,setRandom] = useState([20,55]);

  useEffect(()=>{
    // setTimeout(()=>{
    //   setHello(false)
    // },2000)
  },[])

  const onAddRandom = () => {
    const randomVal = Math.floor(Math.random() * 100) +1;
    const newState = [...random,randomVal];
    setRandom(newState);
  }

  const onItemRemove = (position) => {
      const newArray = random.filter((item,i)=>{
        return position !== i;
      });
      setRandom(newArray);
  }


  return(
    <View style={styles.mainView}>
      <Nav nameOfApp="Awesome app"/>
      <ScrollView 
        //onContentSizeChange={(w,h)=> alert(h)}
       // onMomentumScrollBegin={()=>alert('start')}
       // onMomentumScrollEnd={()=>alert('end')}
        // onScroll={(e)=> console.log(e.nativeEvent)}
        style={{width:'100%'}}
      >
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
          <Generate add={() => onAddRandom()}/>
        </View>
        <ListItems 
          items={random}
          remove={(pos)=>onItemRemove(pos)}
        />
        {/* <Inputs/> */}
        <ActivityIndicator animating={false}/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="small" color="#000fff"/>

      </ScrollView>
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