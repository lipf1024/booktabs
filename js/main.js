
function displayBookmarks(bookmarks, container) {
    for (let i = 0; i < bookmarks.length; i++) {
      const bookmark = bookmarks[i];
      const listItem = document.createElement('li');
  
      if (bookmark.children) {
        listItem.textContent = bookmark.title;
        const sublist = document.createElement('ul');
        displayBookmarks(bookmark.children, sublist);
        listItem.appendChild(sublist);
      } else {
        listItem.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
      }
  
      container.appendChild(listItem);
    }
  }

document.addEventListener('DOMContentLoaded', function() {

    
    chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
      displayBookmarks(bookmarkTreeNodes[0].children, document.getElementById('bookmarksList'));
    });

});
  