const STORAGE_KEY = 'bevasarlolista-items';
const form = document.querySelector('#add-form');
const productInput = document.querySelector('#product-input');
const searchInput = document.querySelector('#search-input');
const productList = document.querySelector('#product-list');
const count = document.querySelector('#count');
const emptyMessage = document.querySelector('#empty-message');
const status = document.querySelector('#status');

function loadItems() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved.filter(item => item && typeof item.name === 'string') : [];
  } catch {
    status.textContent = 'A korábban mentett lista nem olvasható.';
    return [];
  }
}
let items = loadItems();

function saveItems() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    status.textContent = '';
  } catch {
    status.textContent = 'Nem sikerült menteni a listát. Ellenőrizd a böngésző tárhelyét.';
  }
}

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase('hu');
  const visible = items.filter(item => item.name.toLocaleLowerCase('hu').includes(query));
  productList.replaceChildren();
  count.textContent = `${items.length} termék`;
  emptyMessage.textContent = items.length ? 'Nincs találat.' : 'A lista még üres.';
  emptyMessage.hidden = visible.length > 0;

  for (const item of visible) {
    const li = document.createElement('li');
    if (item.done) li.classList.add('done');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!item.done;
    checkbox.setAttribute('aria-label', `${item.name} megvásárolva`);
    checkbox.addEventListener('change', () => {
      item.done = checkbox.checked;
      saveItems(); render();
    });
    const name = document.createElement('span');
    name.className = 'product-name';
    name.textContent = item.name;
    const actions = document.createElement('div');
    actions.className = 'actions';
    const edit = document.createElement('button');
    edit.className = 'secondary';
    edit.textContent = 'Szerkesztés';
    edit.addEventListener('click', () => {
      const newName = prompt('Új terméknév:', item.name);
      if (newName === null) return;
      if (!newName.trim()) { status.textContent = 'A terméknév nem lehet üres.'; return; }
      item.name = newName.trim().slice(0, 80);
      saveItems(); render();
    });
    const remove = document.createElement('button');
    remove.className = 'danger';
    remove.textContent = 'Törlés';
    remove.addEventListener('click', () => {
      items = items.filter(current => current !== item);
      saveItems(); render();
    });
    actions.append(edit, remove);
    li.append(checkbox, name, actions);
    productList.append(li);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;
  items.push({ id: `${Date.now()}-${Math.random()}`, name, done: false });
  productInput.value = '';
  saveItems(); render();
  productInput.focus();
});
searchInput.addEventListener('input', render);
render();

