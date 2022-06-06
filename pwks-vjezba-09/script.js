// 1.

let highlightLongWords = (element, regex) => {
    element.innerHTML = element.innerHTML.replace(regex, '<mark>$&</mark>');
};

highlightLongWords(document.querySelector('p'), /[a-zA-Z]{9,}/g);


// 2.

let addLink = (title, link) => {
    let a = document.createElement('a');
    let linkText = document.createTextNode(title);
    a.appendChild(linkText);
    a.title = title;
    a.href = link;
    document.body.appendChild(a);
}

addLink("Web stranica fakulteta", "https://www.oss.unist.hr/")


// 3.

let wordCount = element => {
    let count = 0;
    for (let i = 0; i < element.length; i++) {
        count += element[i].textContent.split(/\s/).length;
    }
    return count;
}

let insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let createWordCountDiv = () => {
    let wordsInParagraph = wordCount(document.getElementsByTagName("p"));

    let divElement = document.createElement('div');
    divElement.innerHTML = wordsInParagraph + " riječi";
    
    let heading = document.querySelector('h1');
    insertAfter(heading, divElement);
}
  
createWordCountDiv();
    

// 4.

document.querySelector('p').innerText = document.querySelector('p').innerText.replaceAll("?", '🤔');
document.querySelector('p').innerText = document.querySelector('p').innerText.replaceAll("!", '😲');