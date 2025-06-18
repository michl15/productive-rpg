import { HIGHLIGHT_BLUE, LIGHT_BLUE, RED } from "@/constants/colors";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    options: any[];
    onDaySelect: (index: number) => void;
    highlighted: number[];
    valid: boolean;
}

export default function DayPicker({ onDaySelect, highlighted, options, valid }: Props) {
    const PickerItem = ({ text, index }: { text: string, index: number }) => {
        const getStyle = () => {
            let style = { ...styles.pickerItem };
            if (index === 0) {
                style = { ...style, borderLeftWidth: 0, borderTopLeftRadius: 9, borderBottomLeftRadius: 9 }
            }
            if (index === 6) {
                style = { ...style, borderBottomRightRadius: 9, borderTopRightRadius: 9 }
            }

            if (highlighted && highlighted.includes(index)) {
                style = { ...style, backgroundColor: HIGHLIGHT_BLUE }
            }

            if (!valid) {
                style = { ...style, borderColor: RED }
            }

            return style;
        }

        return (
            <Pressable onPress={() => { onDaySelect(index) }}>
                <View style={getStyle()}>
                    <Text style={styles.pickerText} >
                        {text}
                    </Text>
                </View>
            </Pressable>
        )
    }

    const getBorderColor = () => {
        return !valid ? RED : LIGHT_BLUE
    }

    return (
        <View style={{ ...styles.pickerContainer, borderColor: getBorderColor() }}>
            <FlatList
                horizontal
                data={options}
                renderItem={(item) => <PickerItem text={item.item} index={item.index} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        height: 50,
        justifyContent: "center",
        borderColor: LIGHT_BLUE,
        borderWidth: 2,
        borderRadius: 10
    },
    pickerItem: {
        padding: 15,
        borderColor: LIGHT_BLUE,
        width: 50,
        textAlign: "center",
        justifyContent: "center",
        borderLeftWidth: 1,
        backgroundColor: "",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    pickerText: {
        color: '#fff',
        margin: "auto"
    }
})