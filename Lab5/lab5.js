const response = {
    "people": [
        {
            "id": 1,
            "name":  "John Doe",
            "country": "Afghanistan",
            "email": "john1@example.com",
            "imageURL": "jdoe.jpg"
        },
        {
            
            "id": 2,
            "name": "Jane Smith",
            "country": "Albania",
            "email": "jane2@example.com"
        },
        {
            
            "id": 3,
            "name": "Jim Brown",
            "country": "Algeria",
            "email": "jim3@example.com"
        },
        {
            
            "id": 4,
            "name": "Jake White",
            "country": "Andorra",
            "email": "jake4@example.com"
        }
    ]
}

const tableContent = document.getElementById("table-content")
const tableButtons = document.querySelectorAll("th button");

const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj);
    objKeys.map((key) => {
      const cell = document.createElement("td");
      cell.setAttribute("data-attr", key);
  
      if (key === "name") {
        const nameContainer = document.createElement("div");
        nameContainer.classList.add("name-container");
  
        const img = document.createElement("img");
        img.setAttribute("src", obj.imageURL);
        img.setAttribute("alt", obj.name);
        img.setAttribute("width", "50"); // Adjust the width as needed
        nameContainer.appendChild(img);
  
        const nameSpan = document.createElement("span");
        nameSpan.textContent = obj.name;
        nameContainer.appendChild(nameSpan);
  
        cell.appendChild(nameContainer);
      } else {
        cell.innerHTML = obj[key];
      }
  
      row.appendChild(cell);
    });
    return row;
  };
  

const getTableContent = (data) => {
  data.map((obj) => {
    const row = createRow(obj);
    tableContent.appendChild(row);
  });
};

const sortData = (data, param, direction = "asc") => {
  tableContent.innerHTML = '';
  const sortedData =
    direction == "asc"
      ? [...data].sort(function (a, b) {
          if (a[param] < b[param]) {
            return -1;
          }
          if (a[param] > b[param]) {
            return 1;
          }
          return 0;
        })
      : [...data].sort(function (a, b) {
          if (b[param] < a[param]) {
            return -1;
          }
          if (b[param] > a[param]) {
            return 1;
          }
          return 0;
        });

  getTableContent(sortedData);
};

const resetButtons = (event) => {
  [...tableButtons].map((button) => {
    if (button !== event.target) {
      button.removeAttribute("data-dir");
    }
  });
};

window.addEventListener("load", () => {
  getTableContent(response.people);

  [...tableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      resetButtons(e);
      if (e.target.getAttribute("data-dir") == "desc") {
        sortData(response.people, e.target.id, "desc");
        e.target.setAttribute("data-dir", "asc");
      } else {
        sortData(response.people, e.target.id, "asc");
        e.target.setAttribute("data-dir", "desc");
      }
    });
  });
});

