
 import React, {useState} from 'react';
 import {
   StyleSheet,
   Text,
   SafeAreaView,
   View,
 } from 'react-native';
 import SwitchSelector from "react-native-switch-selector";

 const switchoptions = [
  { label: "Tall", value: "Tall", imageIcon: require('./images/person-icon.png') },
  { label: "Average", value: "Average", imageIcon: require('./images/person-icon.png')},
  { label: "Short", value: "Short", imageIcon: require('./images/person-icon.png') }
];


 
 class App extends React.Component {
   constructor(){
     super()
     this.state = {
       height: '',
     };
   }
   setHeight(height){
     this.setState({height: 'I am ' + height});
   }
   render() {
     
     return (
       <View>
       <SafeAreaView>

        <View>
        <Text style={styles.sectionTitle}> Switch Selector in {'\n'} React Native</Text>
        </View>
       </SafeAreaView>
       <View >
       <SwitchSelector
  options={switchoptions}
  initial={2}
  fontSize={20}
  buttonColor="blue"
  selectedColor="white"
  borderColor="blue"
  textColor="blue"
  hasPadding
  onPress={value => this.setHeight(value)}
/>
       </View>
       <Text style={styles.sectionTitle}>What is your height? {'\n'} {this.state.height}</Text>
       </View>
       

     )
   };
 };
 
 const styles = StyleSheet.create({
 
   sectionTitle: {
     fontSize: 24,
     fontWeight: '900',
     textAlign: "center",
     padding: 20,
   },
 });
 
 export default App;
      