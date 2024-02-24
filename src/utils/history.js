const keyStory = "story"

export const setHistory = (historyData) => {
    localStorage.setItem(keyStory, JSON.stringify([
        ...getHistory(),
        historyData
    ]))
}

export const getHistory = () => {
    const historyData = localStorage.getItem(keyStory);

    if (!historyData) return [];

    return JSON.parse(historyData)
}

export const deleteHistory = () => {
    localStorage.removeItem(keyStory);
}