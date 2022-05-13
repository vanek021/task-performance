const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let items = [];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
  items = Array.from(contacts.getElementsByClassName("contact"));
}

contacts.addEventListener("scroll", (e) => {
  const top = Math.floor(contacts.scrollTop / 18);
  stickyHeader.textContent = items[top].textContent;
});

addContacts();