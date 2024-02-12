import React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppScreen from "./screens/AppScreen";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <PaperProvider>
                        <AppScreen />
                    </PaperProvider>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

export default gestureHandlerRootHOC(App);