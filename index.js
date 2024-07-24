alert("Site still under construction :/")

const schoolsList = document.getElementById('schools-list')
console.log(schoolsList)

console.log("Really tho it's under construction...")
fetch("http://localhost:3000/schools")
.then(response => response.json())
.then(schools => {
    schools.forEach(addSchoolToList)
})

function addSchoolToList(school) {
    const liElement = document.createElement('li')
    const nameElement = document.createElement('h3')
    nameElement.textContent = `School Name: ${school.name}`

    liElement.appendChild(nameElement)
    schoolsList.appendChild(liElement)

}


// above code was attempt to follow along with ricardo but for my own school example (stopped following him, but current amount seems reasonably illustrative)
//note Can create a "sample" json file by standing up a non-existant json server (refer to code challenge for specfic commands)