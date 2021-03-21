import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet,Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from "react-native-elements";
import db from './localDb';
import Sound from "./components/Sound" 

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
      sound:[]
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: "Monkey Chunky" }} />
        <Image source={{
          uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
        }}
        style={{height:120,width:120,alignSelf:"center"}}/>
        <TextInput
          style={styles.InputBox}
          value={this.state.text}
          placeholder="Enter your word"
          onChangeText={(word) => {
            this.setState({
              text: word
            })
          }}
        />
        <TouchableOpacity style={styles.btn}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim()

            db[word]?(
              this.setState({
                   chunks: db[word].chunks,
        
                 }),
                 this.setState({
                 
                  sound: db[word].phones
                 })
            ):Alert.alert("The word does not exist on our dataBase");
             

            
          }}
        >
          <Text style={{ textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item,index)=>{
            return(
              <Sound word={this.state.chunks[index]} phonemes={this.state.sound[index]}/>
            )
          })}
        </View>
   
      </View>

    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  InputBox: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    borderWidth: 0.5,
    borderRadius:20,
    textAlign: "center",

  },
  btn: {
    marginTop: 5,
    backgroundColor: "#00cec9",
    width: "50%",
    alignSelf: "center",
    borderRadius:20,
    padding: 2,


  },

});
