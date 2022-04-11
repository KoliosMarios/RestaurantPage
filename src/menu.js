function generateMenu () {
    const content = document.querySelector('#content');

    const section = document.createElement('div');

    const starters = document.createElement('h1');
    starters.textContent = 'Starters'
    section.appendChild(starters);

    const p1 = document.createElement('p');
    p1.textContent = 'something, price, etc';
    section.appendChild (p1);

    const mains = document.createElement('h1');
    mains.textContent = 'Main dishes'
    section.appendChild(mains);

    const p2 = document.createElement('p');
    p2.textContent = 'something, price, etc';
    section.appendChild (p2);

    const deserts = document.createElement('h1');
    deserts.textContent = 'Deserts'
    section.appendChild(deserts);

    const p3 = document.createElement('p');
    p3.textContent = 'something, price, etc';
    section.appendChild (p3);

    content.appendChild(section);
}

export default generateMenu