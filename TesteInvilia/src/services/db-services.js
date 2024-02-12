import SQLite from "react-native-sqlite-storage";

SQLite.enablePromise(true);
const limit = 50;

export const getDB = async () => {
    return SQLite.openDatabase({name: 'dictionary.db', createFromLocation: 1});    
}

export const getWordList = async (db, page = 1) => {
    try {
        const start = page > 0 ? page - 1 : 0;
        const offset = start * limit;
        const items = [];
        
        const results = await db.executeSql(`select * from wordlist limit ${offset},${limit}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
            items.push(result.rows.item(index))
            }
        });

        return items;
    } catch (error) {
        console.log('Failed to get items', error);
        throw Error('Failed to get items');
    }
}