//
// const upperCase = () => {
//     let text = document.querySelector("textarea").value;
//     let toUpperCase = text.toUpperCase();
//     document.querySelector(".changedText").innerHTML = text.toUpperCase();
//     let textArea = document.querySelector("textarea");
//     let parentNode = textArea.parentNode;
//     parentNode.removeChild(textArea);
//     parentNode.innerHTML = `<textarea id="input" cols="100" rows="20">${text.toUpperCase()}</textarea>`;
//
//     // const newDiv = document.createElement("textarea");
//     //
//     // // and give it some content
//     // const newContent = document.createTextNode(`${text.toUpperCase()}`);
//     //
//     // // add the text node to the newly created div
//     // newDiv.appendChild(newContent);
//     //
//     // // add the newly created element and its content into the DOM
//     // const currentDiv = document.querySelector(".changedText");
//     // document.body.insertBefore(newDiv, currentDiv);
// never use innerHTML on input or textarea. then this item will not be accessible for other functions. just use .value
// }
let text = document.querySelector("textarea");
document.getElementById("upper-case")
    .addEventListener("click",function(){
        text.value = text.value.toUpperCase();
    });
document.getElementById("lower-case")
    .addEventListener("click",function(){
        text.value = text.value.toLowerCase();
    });
const properCase = () => {
    // splitting each word by spaces between
    let arr = text.value.split(" ");
    // loop going through each word/ forEach didn't succeed
    for (let i = 0; i < arr.length; i++) {
        // at each word(arr[index], upperCase each first letter, then add the rest of word
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    };
    // after looping, join all words together into string and put on page
    text.value = arr.join(" ");
}
document.getElementById("proper-case").addEventListener("click", properCase);

const sentenceCase = () =>  {
    // splitting each sentence by dot between them
    text.value = text.value.toLowerCase();
    let arr = text.value.split(". ");
    // loop going through each word/ forEach didn't succeed
    for (let i = 0; i < arr.length; i++) {
        //at each sentence(arr[index], upperCase each first letter, then add the rest of sentence
        // if first letter appears to be a space, then capitalised 2nd letter and add her the rest of sentence counting from 3 letter
        if (arr[i][0] === " " || arr[i][0] === '\"') {
            // this part add double quote only on first sentence/word of array somehow
                arr[i] = "\"" + arr[i].charAt(1).toUpperCase() + arr[i].slice(2);
        } else {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }

    //after looping, join all words together into string and put on page

    text.value  = arr.join(". ");
    // for the whitespace at the end of whole string, idk how but it was removed only when split() and join methods had value like this ". "
}
document.getElementById("sentence-case").addEventListener("click", sentenceCase);

function download(text) {
    // grabbing text from textarea
    text = document.querySelector('textarea').value;
    let element = document.createElement('a');
    // I guess this text is inserted then here
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    //here I changed only second parameter from variable filename to name of file in string
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download. Commented to don't mess your computer with files.
// download("hello.txt","This is the content of my file :)");
document.getElementById("save-text-file").addEventListener("click", download);



