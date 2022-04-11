function generateContact () {
    const content = document.querySelector('#content');

    const section = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    section.appendChild(h1)

    const div1 = document.createElement('div');
    div1.textContent = 'Email:......';
    section.appendChild(div1);

    const div2 = document.createElement('div');
    div2.textContent = 'Telephone:......';
    section.appendChild(div2);

    content.appendChild(section);
}

export default generateContact;