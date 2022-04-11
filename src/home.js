function generateHome() {
    const content = document.querySelector('#content');

    const section = document.createElement('div');
    section.classList.add('home');
    section.setAttribute('id','home');

    const h1 = document.createElement('h1');
    h1.textContent =  'The Name';
    section.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = 'Established in ..... ';
    section.appendChild(h3);

    const img = document.createElement('img');
    img.src = 'https://previews.123rf.com/images/dmitrymoi/dmitrymoi1702/dmitrymoi170200016/71707598-restaurante-o-cafeter%C3%ADa-edificio-exterior-vector-ilustraci%C3%B3n-de-dibujos-animados.jpg';
    img.setAttribute('id','img');
    section.appendChild(img);

    content.appendChild(section);
}

export default generateHome;