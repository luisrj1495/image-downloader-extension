export const getCurrentTab = (): Promise<chrome.tabs.Tab> => {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({}, (tabs) => {
            const tab = tabs.find((tab) => tab.active);
            if (tab) resolve(tab);
            else reject(new Error("There is no tabs active"));
        });
    });
};
