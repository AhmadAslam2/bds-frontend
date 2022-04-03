import * as SecureStore from 'expo-secure-store';

export async function saveInStorage(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export async function getFromStorage(key) {
    const res = await SecureStore.getItemAsync(key);
    return `Bearer ${res}`
}


export function isLoggedIn(key) {
    return SecureStore.getItemAsync(key)
}
