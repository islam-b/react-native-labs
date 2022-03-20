const settings = {
    dev: {
        baseUrl: "https://books-app-rn.azurewebsites.net",
        storageKey: "booksAppSafeStorage"
    },
    prod: {
        baseUrl: "https://books-app-rn.azurewebsites.net",
        storageKey: "booksAppSafeStorage"
    }
}

export default ENV = __DEV__ ? settings.dev : settings.prod