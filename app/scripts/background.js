'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.executeScript(null, { file: "replace.js" });
});

console.log('\'Allo \'Allo! Event Page for Page Action');