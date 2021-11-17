
chrome.browserAction.setBadgeText({ text: '点我' });

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
    chrome.tabs.executeScript(tab.id, { file: 'js/script.js' });
});