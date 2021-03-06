const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector('.content').appendChild(element);

}

const searchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement);
    if (elements.length > 0) {
        infoElement.innerHTML = `<p class="result__number-info">In this document I found - <span>${elements.length}</span> - elements < <span>${nameElement}</span> ></p>`;
        showInfo(elements, infoElement)
    } else {
        infoElement.innerHTML = `<p class="result__number-info">In this document I don't found elements < <span>${nameElement}</span> ></p>`
        return;
    }
};

const showInfo = (elements, infoElement) => {
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>class/classes: ${element.className}</div>
        <div>element height (offsetHeight): ${element.offsetHeight}</div>
        <div>element width (offsetWidth): ${element.offsetWidth}</div>
        <div>distance from left edge (offsetLeft): ${element.offsetLeft}</div>
        <div>distance from top edge (offsetTop): ${element.offsetTop}</div>
        <div>number of children's elements: (childElementCount): ${element.childElementCount}</div>
        `;
        infoElement.appendChild(item);
    });
};

const addForm = document.querySelector('.form--add')
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));