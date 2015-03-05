import {curry2} from 'fj-curry';

let _elem = (element, content) => {
     var newElem = document.createElement(element); 
     var contentNode = document.createTextNode(content); 
     newElem.appendChild(contentNode);
     return newElem;
};


export default curry2(_elem);

