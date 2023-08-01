export default function popup(name, image, height, weight, abilities, species) {
    const tab = document.createElement('div');
    tab.className = 'popup';

    const tabHead = document.createElement('div');
    tabHead.className = 'tabHead';
    const popImg = document.createElement('img');
    popImg.className = 'popImg';
    popImg.src = image;
    popImg.alt = name;
    const popClose = document.createElement('img');
    popClose.src = './images/cancel.png';
    popClose.alt = `Close button`;
    tabHead.appendChild(popImg);
    tabHead.appendChild(popClose);

    const tabDetail = document.createElement('div');
    tabDetail.className = 'tabDetail';
    const popHead = document.createElement('h3');
    popHead.className = 'popHead';
    popHead.innerHTML = name;
    const popHeight = document.createElement('p');
    popHeight.innerHTML = height;
    const popWeight = document.createElement('p');
    popWeight.innerHTML = weight;
    const popAbilities = document.createElement('p');
    popAbilities.innerHTML = abilities;
    const popSpecies = document.createElement('p');
    popSpecies.innerHTML = species;
    tabDetail.appendChild(popHead);
    tabDetail.appendChild(popHeight);
    tabDetail.appendChild(popWeight);
    tabDetail.appendChild(popAbilities);
    tabDetail.appendChild(popSpecies);

    const tabComments = document.createElement('div');
    tabComments.className = 'tabComments';
    const commentsHead = document.createElement('h4');
    const comments = document.createElement('ul');
    comments.className = 'comments';
    commentsHead.innerHTML = 'Comments(' + comments.childElementCount + ')';
    tabComments.appendChild(commentsHead);
    tabComments.appendChild(comments);

    const form = document.createElement('form');
    form.className = 'commentForm';
    const formHead = document.createElement('h4');
    formHead.innerHTML = 'Add a comment';
    const formName = document.createElement('input');
    formName.type = 'text';
    formName.name = 'Username'
    formName.id = 'formName';
    formName.placeholder = 'Your name';
    const formText = document.createElement('textarea');
    formText.name = 'UserComment';
    formText.id = 'formText';
    formText.placeholder = 'Your insights';
    formText.rows = '10';
    formText.cols = '30';
    const formSubmit = document.createElement('button');
    formSubmit.type = 'submit';
    formSubmit.id = 'formSubmit';
    form.appendChild(formHead);
    form.appendChild(formName);
    form.appendChild(formText);
    form.appendChild(formSubmit);

    tab.appendChild(tabHead);
    tab.appendChild(tabDetail);
    tab.appendChild(tabComments);
    tab.appendChild(form);

    document.body.appendChild(tab);
}
