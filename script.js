//console.dir(window);
// console.dir(window.document.body);
// var a = 1000000;
// console.dir(window);

// Выбор элеементов DOM по ID, возвращает один элемент
// var selectorId = document.getElementById('selectorId');
// console.log(selectorId);
// 
// Выбор элементов DOM по className, возвращает массив
// var selectorClass = document.getElementsByClassName('selectorClass');
// console.log(selectorClass);
// 
// Выбор элементов DOM по tagName, возвращает массив
// var selectorTag = document.getElementsByTagName('div');
// console.log(selectorTag);
// 
// Выбор элементов DOM по CSS-селектору, возвращает первый попавшийся элемент
// var querySel = document.querySelector('#selectorId');
// console.log(querySel);
// 
// Выбор элементов DOM по имени и значению атрибута, возвращает массив
// var querySelAttr = document.querySelector('[name="value"]');
// console.log(querySelAttr);
// 
// Выбор элементов DOM по CSS-селектору, возвращает массив
// var querySelAll = document.querySelectorAll('.selectorClass');
// console.log(querySelAll);
// 
// Выбор элементов DOM по значению атрибута name, возвращает массив
// var byName = document.getElementsByName('value');
// console.log(byName);
// 
// Возвращает родителя элемента DOM, возвращает коллекцию
// var childSelectorClass = document.getElementsByClassName('childSelectorClass');
// for (var i = 0; i < childSelectorClass.length; i++) {
//     // Возвращает родителя элемента DOM, возвращает коллекцию
//     console.log(childSelectorClass[i].parentNode);
// }
//
//
// var selectorClass = document.getElementsByClassName('selectorClass')[1];
// 
// Доступ к элементам перед данным, можно получить по previousSibling
// console.log(selectorClass.previousSibling);
// 
// Доступ к соседним-элементам перед данным, можно получить по previousElementSibling
// var selectorClass2 = selectorClass.previousElementSibling;
// console.log(selectorClass2);
// selectorClass2.innerHTML = 'ghffdghfgjghkhgg';
// console.log(selectorClass.previousElementSibling);
// 
// Доступ к элементам после данного, можно получить по nextSibling
// console.log(selectorClass.nextSibling);
// 
// Доступ к соседним-элементам после данного, можно получить по nextElementSibling
// console.log(selectorClass.nextElementSibling);
// 
var selectorClass2 = document.getElementsByClassName('selectorClass')[2];
// Возвращает родителя элемента
// console.log(selectorClass2.parentElement); //body
// 
// Псевдо-массив childNodes хранит все дочерние элементы, включая текстовые
// console.log(selectorClass2.childNodes);
// 
// Возвращает только дочерние узлы-элементы, то есть соответствующие тегам
// console.log(selectorClass2.children);
// 
// Свойства firstChild обеспечивают быстрый доступ к первому элементу, включая текст и элемент перевода новой строки
// console.log(selectorClass2.firstChild);
// 
// // Свойства lastChild обеспечивают быстрый доступ к последнему элементу, включая текст и элемент перевода новой строки
// console.log(selectorClass2.lastChild);
// 
// Первый и последний дети-элементы, соответственно
// console.log(selectorClass2.firstElementChild);
// console.log(selectorClass2.lastElementChild);
// 
// 
// var selectorClass = document.getElementsByClassName('selectorClass')[0];
// console.log(selectorClass.hasAttribute('dataid'));
// console.log(selectorClass.getAttribute('dataid'));
// selectorClass.setAttribute('dataidnew', 'new');
// selectorClass.removeAttribute('dataid');

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var beforeElem = selectorClass.firstElementChild;
// var div = document.createElement('div');

// console.dir(div);
// div = '<div></div>'
// console.dir(div);
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'Ours Div';
//     selectorClass.insertBefore(div, beforeElem);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'Ours Div append';
//     // selectorClass.appendChild(div);
//     selectorClass.append(div);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var updatedElem = selectorClass.firstElementChild;
// btn.onclick = function() {
//     var div = document.createElement('div');
//     div.innerHTML = 'Ours Div';
//     selectorClass.replaceChild(div, updatedElem);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var updatedElem = selectorClass.firstElementChild;
// btn.onclick = function() {
//     selectorClass.removeChild(updatedElem);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[2];
// var i = 0;
// btn.onclick = function() {
//     i++;
//     var newElem = document.createElement('div');
//     newElem.innerHTML = 'This is new Element' + i;
//     selectorClass.before(newElem);
//     // selectorClass.prepend(newElem, selectorClass.firstElementChild);
// }

// var selectorClass = document.getElementsByClassName('selectorClass')[0];
// console.log(selectorClass.className);
// console.log(selectorClass.classList.contains('selectorClass'));
// selectorClass.classList.add('selectorClass123');
// console.log(selectorClass.className);
// selectorClass.classList.remove('selectorClass123');
// console.log(selectorClass.className);
// btn.onclick = function() {
//     selectorClass.classList.toggle('selectorClass123');
// }