import { GREEN, LIGHT_BLUE, RED, YELLOW } from "@/constants/colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label?: string;
    onPress?: () => void;
    Icon?: React.ElementType;
    iconName?: string;
    size?: "small" | "large";
    variant?: "success" | "error" | "warning";
}

export default function Button({ label, onPress, Icon, iconName, size, variant }: Props) {
    const btnStyle = () => {
        if (size === "small") {
            return smallButtonStyles;
        } else {
            return styles;
        }
    }

    const iconSize = () => {
        if (size === "small") {
            return 16;
        } else {
            return 24;
        }
    }

    const getColorFromVariant = () => {
        if (variant === "success") {
            return GREEN;
        } else if (variant === "error") {
            return RED;
        } else if (variant === "warning") {
            return YELLOW;
        } else {
            return LIGHT_BLUE;
        }
    }

    return (
        <Pressable onPress={onPress}>
            <View style={{
                ...btnStyle().buttonContainer,
                borderColor: getColorFromVariant()
            }}>
                {Icon && <Icon name={iconName} size={iconSize()} color={getColorFromVariant()} style={label ? btnStyle().iconStyle : {}} />}
                {label && <Text style={{
                    ...btnStyle().buttonText,
                    color: getColorFromVariant()
                }}>{label}</Text>}
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: LIGHT_BLUE,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 10,
        flexDirection: 'row'
    },
    button: {
        flexDirection: 'row',
    },
    buttonText: {
        color: LIGHT_BLUE,
        fontSize: 18
    },
    iconStyle: {
        marginRight: 8
    }
});

const smallButtonStyles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: LIGHT_BLUE,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
        flexDirection: 'row'
    },
    button: {
        flexDirection: 'row',
    },
    buttonText: {
        color: LIGHT_BLUE,
        fontSize: 14
    },
    iconStyle: {
        marginRight: 5
    }
})