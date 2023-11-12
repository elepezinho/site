// Seu código de dados e funções de pesquisa aqui...

// Função para atualizar a página com os resultados filtrados
function updatePageWithResults(results) {
  // Limpar a página
  document.getElementById("searchResults").innerHTML = "";

  if (results.length === 0) {
    document.getElementById("searchResults").innerHTML = "Nenhum resultado encontrado.";
    return;
  }

  results.forEach(result => {
    const resultItem = document.createElement("div");
    resultItem.className = "result";
    resultItem.innerHTML = `
      <a href="${result.link}">
        <img src="${result.image}" alt="${result.title}">
      </a>
      <div>
        <h4><a href="${result.link}">${result.title}</a></h4>
        <p>${result.content}</p>
      </div>
    `;
    document.getElementById("searchResults").appendChild(resultItem);
  });
}

// Event listener para o input de pesquisa
document.getElementById("searchInput").addEventListener("input", () => {
  const query = document.getElementById("searchInput").value;
  const results = search(query);
  updatePageWithResults(results);
});

// Event listener para a mudança de página
window.addEventListener("popstate", () => {
  const query = window.location.search.replace("?q=", "");
  document.getElementById("searchInput").value = query;
  const results = search(query);
  updatePageWithResults(results);
});

// Carregar os resultados iniciais
const initialQuery = window.location.search.replace("?q=", "");
document.getElementById("searchInput").value = initialQuery;
const initialResults = search(initialQuery);
updatePageWithResults(initialResults);

// Dentro da função displayResults após adicionar os resultados à página
resultItem.addEventListener("click", () => {
  history.pushState(null, "", `index.html?q=${result.title}`);
});