import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, View, FlatList, Text } from "react-native";
import styles from "./styles";
import { Button, Modal, Title } from "react-native-paper";
import { getDB, getWordList } from "../services/db-services";
import { getApiWord } from "../services/api-services";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, addHistory, delFavorite } from "../redux/action";

const defaultReadWord = {
    word: '',
    phonetic: '',
    meanings: []
}

const AppScreen = () => {
    const dispatch = useDispatch();
    const historyList = useSelector(state => state.historyWord);
    const favoritesList = useSelector(state => state.favoriteWords);
    
    const [wordList, setWordList] = useState([]);
    const [page, setPage] = useState(1);
    const [activeList, setActiveList] = useState('wordlist');
    const [visible, setVisible] = useState(false);
    const [readWord, setReadWord] = useState(defaultReadWord);
    
    useEffect(() => {
        async function readDictionary() {
            const db = await getDB()
            const items = await getWordList(db, page);
            setWordList(items);
        }

        readDictionary();
    }, []);

    const renderItem = ({ item }) => {
        return <Button style={styles.buttonWord} labelStyle={styles.buttonLabel} onPress={() => getWord(item.word)}>
            {item.word}
        </Button>;
    }

    const carregarLista = async () => {
        const db = await getDB()
        const items = await getWordList(db, page);
        setWordList((prevList) => [...prevList, ...items]);
    }

    const carregarMais = () => {
        setPage((prevPage) => prevPage + 1);
        carregarLista();
    }

    const getWord = async (word) => {
        let readWord = historyList.find((history) => history.word == word);

        if (readWord == undefined) {
            const response = await getApiWord(word);
            readWord = response.data[0];
            dispatch(addHistory(readWord));
        }
        
        setReadWord(readWord);
        setVisible(true);
    }

    const getButtonColor = (buttonId) => {
        return buttonId == activeList ? '#eee' : '#fff';
    }

    const renderMeanings = (meaning) => {
        return meaning.map((meaning) => {
            return (
                <View>
                    <Text>{meaning.partOfSpeech} - </Text>
                    <Text>{meaning.definitions[0].definition}</Text>
                </View>
            );
        });
    }

    const renderBotoesFavoritar = () => {
        return (
            <View style={styles.containerBotoes}>
                <Button onPress={() => dispatch(delFavorite(readWord))}>Desfavoritar</Button>
                <Button onPress={() => dispatch(addFavorite(readWord))}>Favoritar</Button>
            </View>
        );
    }
    
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
            <KeyboardAvoidingView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <View style={styles.pageGroup}>
                        <Button 
                            style={styles.buttonWord} 
                            buttonColor={getButtonColor('wordlist')}
                            onPress={() => {
                                setPage(1);
                                setActiveList('wordlist');
                                carregarLista();
                            }}
                        >
                            Word List
                        </Button>
                        <Button 
                            style={styles.buttonWord} 
                            buttonColor={getButtonColor('history')}
                            onPress={() => {
                                setActiveList('history');
                                setWordList(historyList);
                            }}
                        >
                            History
                        </Button>
                        <Button 
                            style={styles.buttonWord} 
                            buttonColor={getButtonColor('favorites')}
                            onPress={() => {
                                setActiveList('favorites');
                                setWordList(favoritesList);
                            }}
                        >
                            Favorites
                        </Button>
                    </View>
                    <FlatList
                        style={styles.lista}
                        contentContainerStyle={styles.contentContainerStyle}
                        data={wordList}
                        keyExtractor={(item, key) =>
                            Math.random()
                                .toString(36)
                                .replace(/[^a-z]+/g, '')
                                .substr(0, 11)
                        }
                        renderItem={renderItem}
                        onEndReached={carregarMais}
                        numColumns={3}
                    />
                    <Modal visible={visible} onDismiss={() => setVisible(false)}>
                        <View style={styles.wordBox}>
                            <Text>{readWord.word}</Text>
                            <Text>{readWord.phonetic}</Text>
                        </View>
                        <Title>Meanings</Title>
                        {renderMeanings(readWord.meanings)}
                        {renderBotoesFavoritar()}
                    </Modal>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AppScreen;