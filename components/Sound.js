import React, { Component } from 'react';
import { StyleSheet,View, Text,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

export default class Sound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    playSound= async (chunk)=>{
        var link="https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/"+chunk+".mp3"
        await Audio.Sound.createAsync({
            uri:link
        },{
            shouldPlay:true
        });
    } 
    render() {
        return (

            <TouchableOpacity style={styles.sndbtn}
            onPress={()=>{
                this.playSound(this.props.phonemes)
            }}
            >
                <Text>{this.props.word}</Text>
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    sndbtn:{
        marginTop: 5,
        backgroundColor: "#ff7675",
        width: "50%",
        alignSelf: "center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        padding: 2,
    }
  
  });
  