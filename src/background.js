const MENU_ID = 'preview-deploy-helper'

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: 'OneSignal Preview Deploy',
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const emailURL = "https://dashboard.onesignal.com/super-user?email=";

  if (info.menuItemId === MENU_ID) {
    const branch = info.selectionText.substr(0, 28);
    chrome.tabs.create({
      url: `https://${branch}.preview.onesignal.com/apps`
    });
  }
});
