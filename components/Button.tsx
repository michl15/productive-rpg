import { LIGHT_BLUE } from "@/constants/colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
    variant?: string;
    Icon?: React.ElementType;
    iconName?: string;
}

export default function Button({ label, onPress, Icon, iconName }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={styles.button}>
                {Icon && <Icon name={iconName} size={25} color={LIGHT_BLUE} style={styles.iconStyle} />}
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: "#70cbff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 10,
    },
    button: {
        flexDirection: 'row',
    },
    buttonText: {
        color: "#70cbff",
        fontSize: 20
    },
    iconStyle: {
        marginRight: 8
    }
});