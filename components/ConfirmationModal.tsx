import { LIGHT_BLUE } from "@/constants/colors";
import { coreStyles } from "@/constants/styles";
import { Modal, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

type Props = {
    onConfirm: () => void;
    onCancel: () => void;
    visible: boolean;
    message: string;
    header?: string;
}
export default function ConfirmationModal({ onCancel, onConfirm, visible, message, header }: Props) {

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}>
            <View style={coreStyles.container}>
                <View style={styles.modalView}>
                    <Text style={coreStyles.titleText}>{header}</Text>
                    <Text style={styles.messageContainer}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <Button label="Cancel" onPress={onCancel} variant="secondary" />
                        <Button label="Confirm" onPress={onConfirm} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row"
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        borderColor: LIGHT_BLUE,
        borderWidth: 1,
        elevation: 5,
    },
    messageContainer: {
        textAlign: "center",
        color: "#fff",
        paddingBottom: 20
    }
})