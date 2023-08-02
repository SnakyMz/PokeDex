import API from './api-data.js';

const api = new API();

export default function popup(name, image, height, weight, ability, type, id) {
  const overlay = document.querySelector('.overlay');
  const container = document.querySelector('.popContainer');
  container.innerHTML = '';
  const tab = document.createElement('div');
  tab.className = 'popup';

  const tabHead = document.createElement('div');
  tabHead.className = 'tabHead';
  const popClose = document.createElement('img');
  popClose.className = 'closeBtn';
  popClose.src = './images/cancel.png';
  popClose.alt = 'Close button';
  popClose.addEventListener('click', () => {
    container.removeChild(tab);
    overlay.style.display = 'none';
    document.body.style.overflow = 'scroll';
  });
  tabHead.appendChild(popClose);

  const tabImage = document.createElement('div');
  tabImage.className = 'tabImage';
  const popImg = document.createElement('img');
  popImg.className = 'popImg';
  popImg.src = image;
  popImg.alt = name;
  tabImage.appendChild(popImg);

  const tabDetail = document.createElement('div');
  tabDetail.className = 'tabDetail';
  const popHead = document.createElement('h3');
  popHead.className = 'popHead';
  popHead.innerHTML = name;
  const popDetail = document.createElement('div');
  popDetail.className = 'popDetail';
  const popHeight = document.createElement('p');
  popHeight.innerHTML = `height: ${height}`;
  const popWeight = document.createElement('p');
  popWeight.innerHTML = `weight: ${weight}`;
  const popAbilities = document.createElement('p');
  popAbilities.innerHTML = `ability: ${ability}`;
  const popSpecies = document.createElement('p');
  popSpecies.innerHTML = `type: ${type}`;
  tabDetail.appendChild(popHead);
  popDetail.appendChild(popHeight);
  popDetail.appendChild(popWeight);
  popDetail.appendChild(popAbilities);
  popDetail.appendChild(popSpecies);
  tabDetail.appendChild(popDetail);

  const tabComments = document.createElement('div');
  tabComments.className = 'tabComments';
  const commentsHead = document.createElement('h4');
  const comments = document.createElement('ul');
  comments.className = 'comments';
  const loadComments = async () => {
    comments.innerHTML = '';
    await fetch(`${api.urls.comments}?item_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          data.forEach((com) => {
            const li = document.createElement('li');
            li.innerHTML = `${com.creation_date} ${com.username}: ${com.comment}`;
            comments.appendChild(li);
            commentsHead.innerHTML = `Comments(${comments.childElementCount})`;
          });
        }
      });
  };
  loadComments();
  tabComments.appendChild(commentsHead);
  tabComments.appendChild(comments);

  const form = document.createElement('form');
  form.className = 'commentForm';
  const formHead = document.createElement('h4');
  formHead.innerHTML = 'Add a comment';
  const formName = document.createElement('input');
  formName.type = 'text';
  formName.name = 'Username';
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
  formSubmit.innerHTML = 'Submit';
  form.appendChild(formHead);
  form.appendChild(formName);
  form.appendChild(formText);
  form.appendChild(formSubmit);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await fetch(api.urls.comments, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: formName.value,
        comment: formText.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    loadComments();
    form.reset();
  });

  tab.appendChild(tabHead);
  tab.appendChild(tabImage);
  tab.appendChild(tabDetail);
  tab.appendChild(tabComments);
  tab.appendChild(form);

  container.appendChild(tab);
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}