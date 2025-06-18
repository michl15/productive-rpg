import { DARKER_BLUE, LIGHT_BLUE } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { cloneElement, isValidElement, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ItemProps = {
    header: string;
    body: string | React.ReactNode;
    isFirst?: boolean;
    isLast?: boolean;
    startOpen?: boolean;
}

function Accordion({ children }: React.PropsWithChildren) {
    const childrenArr = React.Children.toArray(children);

    return (
        <View style={accordionStyles.accordionBody}>
            {React.Children.map(childrenArr, (child, index) => {
                if (isValidElement<ItemProps>(child)) {
                    return cloneElement(child, { isFirst: index === 0, isLast: index === childrenArr.length - 1 })
                }
                return child
            })}
        </View>
    )
}

const accordionStyles = StyleSheet.create({
    accordionBody: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: LIGHT_BLUE,
        width: "100%"
    }
})

const Item = ({ header, body, isFirst, isLast, startOpen }: ItemProps) => {
    const [isExpanded, setIsExpanded] = useState(startOpen);
    const firstStyle = isFirst ? { borderTopWidth: 0, borderTopRightRadius: 10, borderTopLeftRadius: 10 } : {}
    const lastStyle = isLast && !isExpanded ? { borderBottomRightRadius: 10, borderBottomLeftRadius: 10 } : {}

    return (
        <View>
            <Pressable style={{
                ...itemStyles.headerContainer,
                ...firstStyle,
                ...lastStyle
            }} onPress={() => setIsExpanded(!isExpanded)}>
                <View>
                    <Text style={itemStyles.headerText}>
                        {header}
                    </Text>
                </View>
                <View style={itemStyles.headerIcon}>
                    {isExpanded ? <Ionicons name="chevron-down" size={18} color={LIGHT_BLUE} /> : <Ionicons name="chevron-up" size={18} color={LIGHT_BLUE} />}
                </View>
            </Pressable>
            {isExpanded && <View style={itemStyles.bodyContainer}>
                <Text style={itemStyles.bodyText}>
                    {body}
                </Text>
            </View>}
        </View>

    )
}
Accordion.Item = Item;

const itemStyles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopColor: LIGHT_BLUE,
        borderTopWidth: 1,
        flexDirection: "row",
        backgroundColor: DARKER_BLUE
    },
    headerText: {
        color: '#fff',
        fontSize: 18
    },
    bodyContainer: {
        borderTopColor: LIGHT_BLUE,
        borderTopWidth: 1,
    },
    bodyText: {
        color: '#fff',
        fontSize: 14
    },
    headerIcon: {
        marginLeft: "auto",
        justifyContent: "center"
    }
});

export default Accordion;