const products = {
  product: [
    { title: "title1", description: "blaf" },
    { title: "title2", description: "bla" },
  ],
  render() {
    const app = document.getElementById("app");
    const ul = document.createElement("ul");
    for (let key of this.product) {
      const li = document.createElement("li");
      li.innerHTML = `
            <div>
            <h2>${key.title}</h2>
            <p>${key.description}</p>
            </div>`;
      ul.append(li);
    }
    app.append(ul);
  },
};

products.render();
