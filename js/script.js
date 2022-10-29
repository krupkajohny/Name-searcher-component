/*
*********************************
Filtering names
*********************************
*/

const nameFilter = () => {
  const nameList = ['Alzbeta', 'Bedrich', 'Joshua', 'Daniel', 'Cindy', 'Mark', 'Niki', 'Lili', 'Kyle'];

  // Cleaning Body HTML
  const pageBody = document.querySelector('body');
  pageBody.innerHTML = '';

  // Element creator/inserter
  const elCreatorInsertor = (tagName, elText = false, className = false, parentEl, attValue = false) => {
    const element = document.createElement(tagName);

    if (elText) element.innerText = elText;
    if (className) element.classList.add(className);
    if (attValue) element.setAttribute('type', attValue);
    parentEl.append(element);

    return element;
  };

  // HTML Elements
  const h1El = elCreatorInsertor('h1', 'Searching names', undefined, pageBody, undefined);
  const searchDivEl = elCreatorInsertor('div', undefined, 'search', pageBody, undefined);
  const searchInputEl = elCreatorInsertor('input', undefined, 'search-input', searchDivEl, 'search');
  const namesListEl = elCreatorInsertor('ul', undefined, 'name-list', searchDivEl, undefined);

  // Populating namesListEl with names from an [ ]
  nameList.forEach((name) => {
    elCreatorInsertor('li', name, 'name', namesListEl, undefined);
  });

  // Updating displayed names based on typed input
  searchInputEl.addEventListener('keyup', function () {
    namesListEl.innerHTML = '';

    nameList.forEach((name) => {
      const strFound = name.toLocaleLowerCase().includes(searchInputEl.value.toLowerCase());
      if (strFound) elCreatorInsertor('li', name, 'name', namesListEl, undefined);
    });
  });
};

nameFilter();
