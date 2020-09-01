// window.onload = () => {
//     console.log('Hello from content');
//     let btn = document.createElement("button");
//     let view = document.getElementById('viewport');
//     btn.id = 'btn_click';
//     btn.value = 'Click';
//     btn.innerHTML = 'Click me';
//     btn.onclick = () => {
//         console.log('Btn clicked');
//     };
//     view.appendChild(btn);
//     // document.body.appendChild(btn);
//     // document.write('');
// };

// window.addEventListener('ext', (e) => {
//     console.log('Event Trigged', e);
//     console.log(e.detail);
//     chrome.runtime.sendMessage({ detail: e.detail }, (res) => {
//         console.log('Response from background', res);
//     });
// });

window.addEventListener('ext', (e) => {
    console.log('Event Trigged', e);
    console.log(e.detail);
    chrome.runtime.sendMessage({ detail: e.detail }, (res) => {
        console.log('Response from background', res);
    });
});