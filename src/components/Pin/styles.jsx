import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pin: {
        width: "50%",
        padding: 10,

    },
    heartIcon: {
        position: "absolute",
        bottom: 10,
        right:10,
        width: 35,
        height: 35,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    image: {
        width: "100%",

        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
});