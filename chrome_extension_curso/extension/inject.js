console.log('Hello');
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    document.getElementById('lst-id').value = message.data.detail.search;
    document.getElementsByName('btnK')[0].click();
});