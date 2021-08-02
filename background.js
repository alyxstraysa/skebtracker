//chrome.alarms.create('checkCanceled', {periodInMinutes: 5});
chrome.alarms.create('checkCanceled', {when: Date.now()});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkCanceled") {

    // chrome.notifications.create('checkCanceled', {
    //   type: 'basic',
    //   iconUrl: 'icons/128.png',
    //   title: 'Canceled Notification',
    //   message: 'A request that you have made has been canceled!',
    //   priority: 2
    // });
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      chrome.notifications.create('checkCanceled', {
        type: 'basic',
        iconUrl: 'icons/128.png',
        title: 'Canceled Notification',
        message: 'A request that you have made has been canceled!',
        priority: 2
      });
      
      sendResponse({farewell: "goodbye"});
  }
);