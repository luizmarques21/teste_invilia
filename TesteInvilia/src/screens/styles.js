import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../utils/utils";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: moderateScale(20)
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: verticalScale(50),
    },
    lista: {
        paddingTop: verticalScale(20),
    },
    buttonWord: {
        borderWidth: 1,
        borderRadius: 0,
        borderColor: '#000',
        width: moderateScale(112),
        height: verticalScale(50),
        paddingVertical: verticalScale(10)
    },
    buttonLabel: {
        fontSize: verticalScale(14),
    },
    pageGroup: {
        flexDirection: 'row',
    }
});

export default styles;