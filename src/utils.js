export function makeID() {
    return Math.random().toString(36).substring(2, 4) + Date.now().toString(36);
}

export function makeStorage(key) {
    return {
        get: () => JSON.parse(window.localStorage.getItem(key)),
        set: (data) => window.localStorage.setItem(key, JSON.stringify(data)),
    };
}
