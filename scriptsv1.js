let items = [];
let editIndex = -1;

const createForm = document.getElementById("create-form");
const updateForm = document.getElementById("update-form");
const itemsList = document.getElementById("items-list");
const editModelo = document.getElementById("edit-modelo");
const editMarca = document.getElementById("edit-marca");
//const editPag = document.getElementById("edit-pag");
const editQuantidade = document.getElementById("edit-quantidade");
//const editCondicao = document.getElementById("");
//const editDiferenciais = document.getElementById("");

createForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const modelo = document.getElementById("modelo").value;
  const marca = document.getElementById("marca").value;
  const quantidade = document.getElementById("quantidade").value;
  //Ações
  createItem(modelo, marca, quantidade);
  createForm.reset();
});

updateForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const modelo = editModelo.value;
  const marca = editMarca.value;
  const quantidade = editQuantidade.value;
  updateItem(editIndex, marca, modelo, quantidade);
  updateForm.style.display = "none";
  createForm.style.display = "block";
  createForm.reset();
});

document.getElementById("cancel-update").addEventListener("click", function() {
  updateForm.style.display = "none";
  createForm.style.display = "block";
  createForm.reset();
});

document.getElementById("lista").addEventListener("click", function() {
  updateForm.style.display = "none";
  createForm.style.display = "block";
  createForm.reset();
});


function createItem(modelo, marca, quantidade) {
  const item = {
    modelo,
    marca,
    quantidade,
  };
  items.push(item);
  displayItems();
}
function testItem(index) {
  alert("Testando funcionalidade...");

  setTimeout(function() {
    alert('Ligando e desligando corretamente!')
  }, 2000);

  setTimeout(function() {
    alert('Testando Wi-Fi...')
  }, 4000);

  setTimeout(function() {
    alert('Wi-Fi funcionando corretamente!')
  }, 6000);

  setTimeout(function() {
    alert('Checando funcionalidades internas do dispositivo...')
  }, 8000);

  setTimeout(function() {
    alert('Aparelho funcionando corretamente!')
  }, 10000);
}

function updateItem(index, marca, modelo, quantidade) {
  if (index >= 0 && index < items.length) {
    items[index].modelo = modelo;
    items[index].marca = marca;
    items[index].quantidade = quantidade;
    displayItems();
  }
}

function deleteItem(index) {
  var confirmar = prompt('Digite a palavra confirmar para excluir esse item!');

  if (confirmar == 'confirmar') {
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      displayItems();
    }
  }
  else {
    alert('Você desistiu de excluir esse item!');
  }
}

function editItem(index) {
  if (index >= 0 && index < items.length) {
    editIndex = index;
    editModelo.value = items[index].modelo;
    editMarca.value = items[index].marca;
    editQuantidade.value = items[index].quantidade;
    updateForm.style.display = "block";
    createForm.style.display = "none";
  }
}

function displayItems() {
  itemsList.innerHTML = "";
  items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.modelo}</td>
            <td>${item.marca}</td>
            <td>${item.quantidade}</td>
            <td>
                <button onclick="editItem(${index})" class="btn btn-outline-success">Editar</button>
                <button onclick="deleteItem(${index})" class="btn btn-outline-danger">Excluir</button>
                <button onclick="testItem(${index})" class="btn btn-outline-info">Testar</button>
            </td>
        `;
    itemsList.appendChild(row);
  });
}





displayItems();