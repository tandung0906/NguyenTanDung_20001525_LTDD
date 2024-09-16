import React from 'react';
import {Text,StyleSheet,Image, View} from 'react-native';

// const YouApp = () => {
//   return(
//     <View style={{
//       flex:1,
//       backgroundColor:'orange',
//       justifyContent:'center',
//       alignContent:'center'
//     }
//     }>
//     <Image source ={{uri:'https://picsum.photos/200'}} style={{height:100,width:100}}/>
//     </View>
//   );
// };
const YouApp = () => {
  return(
    <View style={style.container}>
    <Image source ={{uri:'https://picsum.photos/200'}} style={{height:200,width:300}}/>
    </View>
  );
};
const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignContent: 'center'
  }
})
export default YouApp;