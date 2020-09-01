console.log('Hello from Background');
chrome.browserAction.onClicked.addListener((tab) => {
    console.log('Printing...');
    chrome.tabs.update(tab.id, { url: "javascript:window.print()" });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // console.log('background', request, sender, sendResponse);
    console.log('background', request, sender);

    chrome.tabs.create({
        url: 'https://www.google.com.br/',
        selected: true
    }, (tab) => {
        chrome.tabs.executeScript(
            tab.id,
            {
                file: 'inject.js',
                runAt: 'document_end'
            },
            () => {
                chrome.tabs.sendMessage(tab.id, { data: request }, (res) => {
                    console.log('Script executed');
                })
            }
        );
    });

    // sendResponse(request.detail)
});