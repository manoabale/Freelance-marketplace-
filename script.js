const freelancers = [
  { id: 1, name: "Alice Johnson", skill: "Web Development", rate: "$25/hr" },
  { id: 2, name: "Michael Smith", skill: "Graphic Design", rate: "$20/hr" },
  { id: 3, name: "Sarah Lee", skill: "Content Writing", rate: "$15/hr" }
];

function displayFreelancers(list) {
  const container = document.getElementById("freelancers");
  container.innerHTML = "";
  list.forEach(f => {
    const div = document.createElement("div");
    div.className = "freelancer";
    div.innerHTML = `
      <h3>${f.name}</h3>
      <p>Skill: ${f.skill}</p>
      <p>Rate: ${f.rate}</p>
    `;
    container.appendChild(div);
  });
}

function filterFreelancers() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = freelancers.filter(f => f.skill.toLowerCase().includes(query));
  displayFreelancers(filtered);
}

function submitJob(event) {
  event.preventDefault();
  const title = document.getElementById("jobTitle").value;
  const company = document.getElementById("jobCompany").value;
  const description = document.getElementById("jobDescription").value;

  alert(`Job Posted!\nTitle: ${title}\nCompany: ${company}\nDescription: ${description}`);

  document.getElementById("jobTitle").value = "";
  document.getElementById("jobCompany").value = "";
  document.getElementById("jobDescription").value = "";
}

displayFreelancers(freelancers);
