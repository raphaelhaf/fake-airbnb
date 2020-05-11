// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const API_URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const myRequest = new Request(API_URL, {method: 'GET'});

fetch(myRequest)
  .then(response => response.text()
  .then(result =>{
      const data = JSON.parse(result);

      data.map(element =>{
        const { photo, name, property_type, price } = element;
        
      row = document.getElementById("row");

      div = document.createElement("div");
      div.className = "col-md-4";

      card = document.createElement("div");
      card.className = "card mb-4 box-shadow";

      image = document.createElement("img");
      image.className = "card-img-top";
      image.src = photo;

      cardBody = document.createElement("div");
      cardBody.className = "card-body";

      cardText = document.createElement("div");
      cardText.className = "card-text";

      propertyType = document.createElement("div");
      propertyType.className = "property-type";
      propertyType.innerHTML = property_type;

      propertyName = document.createElement("div");
      propertyName.className = "property-name"
      propertyName.innerHTML = name;

      propertyPrice = document.createElement("div");
      propertyPrice.className = "property-price";
      propertyPrice.innerHTML = price;

      row.appendChild(div);
      div.appendChild(card);
      card.appendChild(image);
      card.appendChild(cardBody);
      cardBody.appendChild(cardText);
      cardText.appendChild(propertyType);
      cardText.appendChild(propertyName);
      cardText.appendChild(propertyPrice);


      });

  }));