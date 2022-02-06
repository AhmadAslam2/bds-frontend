import * as SecureStore from 'expo-secure-store';

export async function saveInStorage(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export async function getFromStorage(key) {
    return await SecureStore.getItemAsync(key);
}
