export const getCurrentTab = (): Promise<chrome.tabs.Tab> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      if (tabs.length) resolve(tabs[0]);
      else reject(new Error("There is no tabs active"));
    });
  });
};
