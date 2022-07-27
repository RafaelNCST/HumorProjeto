import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerEmoji: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 60
    },
    emojiItem: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleBackGroundEmoji: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 50
    },
    emojis: {
        width: 43,
        height: 43,
    },
    textEmojis: {
        fontFamily: 'SourceSansPro-Bold',
        marginTop: 3,
        fontSize: 12,
    },
})