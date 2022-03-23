const settings = {
    dev: {
        baseUrl: "https://books-app-rn.azurewebsites.net",
        storageKey: "booksAppSafeStorage",
        fallbackCulture: "en"
    },
    prod: {
        baseUrl: "https://books-app-rn.azurewebsites.net",
        storageKey: "booksAppSafeStorage",
        fallbackCulture: "en"
    }
}

export default ENV = __DEV__ ? settings.dev : settings.prod