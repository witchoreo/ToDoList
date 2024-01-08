import React from "react";
import { StyleSheet,View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
main:{
    backgroundColor: "#789fdf",
    padding: 35, 
},
text: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
},
});