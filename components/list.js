import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#B0C4DE",
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: '#dddddd',
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});