document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.style.width = "80%";
  app.style.margin = "100px auto";

  // freelancer array
  const freelancers = [
    {
      name: "Alice",
      occupation: "Writer",
      price: 30,
    },
    {
      name: "Bob",
      occupation: "Teacher",
      price: 50,
    },
    {
      name: "Carl",
      occupation: "Artist",
      price: 45,
    },
  ];

  // create and append elements for header and sub-header
  const header1 = document.createElement("h1");
  header1.textContent = "Freelancer Form";
  app.appendChild(header1);

  const subHeader = document.createElement("sub");
  subHeader.textContent = "The average starting price is $40";
  app.appendChild(subHeader);

  const header2 = document.createElement("h2");
  header2.textContent = "Available Freelancers";
  app.appendChild(header2);

  // create and append table
  const table = document.createElement("table");
  table.id = "freelancers";
  app.appendChild(table);
  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tr = document.createElement("tr");
  thead.appendChild(tr);

  const thName = document.createElement("th");
  thName.innerHTML = "Name";
  tr.appendChild(thName);

  const thOccupation = document.createElement("th");
  thOccupation.innerHTML = "Occupation";
  tr.appendChild(thOccupation);

  const thStartingPrice = document.createElement("th");
  thStartingPrice.innerHTML = "Starting Price";
  tr.appendChild(thStartingPrice);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // function to add a freelancer to the table
  const addFreelancer = (name, occupation, price) => {
    const trBody = document.createElement("tr");
    tbody.appendChild(trBody);

    const tdName = document.createElement("td");
    tdName.innerHTML = name;
    trBody.appendChild(tdName);

    const tdOccupation = document.createElement("td");
    tdOccupation.innerHTML = occupation;
    trBody.appendChild(tdOccupation);

    const tdStartingPrice = document.createElement("td");
    tdStartingPrice.innerHTML = price;
    trBody.appendChild(tdStartingPrice);
  };

  // add initial freelancers
  freelancers.forEach(f => addFreelancer(f.name, f.occupation, f.price));

  // average price display
  const averagePricePara = document.createElement("p");
  averagePricePara.innerHTML = 'Average Starting Price: <span id="averagePrice">$0</span>';
  app.appendChild(averagePricePara);

  // update average price function
  const updateAveragePrice = () => {
    const average = freelancers.reduce((acc, curr) => acc + curr.price, 0) / freelancers.length;
    document.getElementById("averagePrice").textContent = `$${average.toFixed(2)}`;
  };
  updateAveragePrice(); // Initial call to set average price

  // setting interval to add a new user
  setInterval(() => {
    const newFreelancerNames = ["Tim", "Joe", "Mark", "Sue"];
    const newFreelancerOccupations = ["Programmer", "Designer", "WebDev", "IT"];
    const randomName = newFreelancerNames[Math.floor(Math.random() * newFreelancerNames.length)];
    const randomOccupation = newFreelancerOccupations[Math.floor(Math.random() * newFreelancerOccupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 20;

    freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
    addFreelancer(randomName, randomOccupation, randomPrice);
    updateAveragePrice(); // Update average price every time a new freelancer is added
  }, 3000); // setting to every 3 seconds
});
