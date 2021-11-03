// Initialize button with user's preferred color
//let changeColor = document.getElementById("changeColor");
//
//chrome.storage.sync.get("color", ({ color }) => {
//  changeColor.style.backgroundColor = color;
//});

// When the button is clicked, inject setPageBackgroundColor into current page
//changeColor.addEventListener("click", async () => {
//  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//
//  chrome.scripting.executeScript({
//    target: { tabId: tab.id },
//    function: injectUI,
//  });
//});

// The body of this function will be executed as a content script inside the
// current page
//function setPageBackgroundColor() {
//  chrome.storage.sync.get("color", ({ color }) => {
//    document.body.style.backgroundColor = color;
//  });
//}

chrome.runtime.onInstalled.addListener(async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  document.addEventListener('load', () => {
    console.log('hello world');
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectUI,
    });
  });
});

const injectUI = () => {
  const pageContent = document.querySelector('.content');
  const title = document.querySelector('.content>title');
  const wrapper = document.createElement('div');
  const textNode = document.createTextNode('learning is dope!');
  wrapper.appendChild(textNode);

  pageContent.insertBefore(wrapper, title);
};


