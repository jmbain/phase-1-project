alert("Site still under construction :/")

const schoolsListElement = document.getElementById('schools-list')
console.log(schoolsListElement)

console.log("Really tho it's under construction...")
fetch("http://localhost:3000/schools")
.then(response => response.json())
// .then(console.log(response))
.then(schools => {
    filterByStateCodeElement.addEventListener('change', () => {
        console.log("Logging if the change event listener is working")
        displaySchoolData(schools)
    })
    // schools.forEach(addSchoolToList)
    
})

function addSchoolToList(school) {
    const liElement = document.createElement('li')
    // const nameElement = document.createElement('h3')
    liElement.textContent = `School Name: ${school.name}`

    // liElement.appendChild(nameElement)
    schoolsListElement.appendChild(liElement)

}

function addSchoolToGrowingList(school) {
    const liElement = document.createElement('li')
    // const nameElement = document.createElement('h3')
    liElement.textContent = `School Name: ${school.name}`

    // liElement.appendChild(nameElement)
    growingSchoolsListElement.appendChild(liElement)

}

function addSchoolToShrinkingList(school) {
    const liElement = document.createElement('li')
    // const nameElement = document.createElement('h3')
    liElement.textContent = `School Name: ${school.name}`

    // liElement.appendChild(nameElement)
    shrinkingSchoolsListElement.appendChild(liElement)

}


// above code was attempt to follow along with ricardo's example but applying my own school focus (stopped following him, but current amount seems reasonably illustrative)
// burger-project-2 on Ricardo's github has the full project
//note Can create a "sample" json file by standing up a non-existant json server (refer to code challenge for specfic commands)

// const cryptocurrencyListElement = document.getElementById('cryptocurrency-list')
const filterByStateCodeElement = document.getElementById("filter-by-state-code")
const growingSchoolsListElement = document.getElementById("growing-schools-list")
const shrinkingSchoolsListElement = document.getElementById("shrinking-schools-list")


// fetch("http://localhost:3000/schools")
// .then(response => {
//     if(response.ok){
//         response.json().then(schools => {
//             displaySchoolData(schools)
//             filterByStateCodeElement.addEventListener('change', () => {
//                 displaySchoolData(schools)
//             })
//         })
//     }
//     else{
//         alert("Error: Unable to return API data.")
//     }
// })

// function addCryptocurrencyToList(cryptocurrency) {
//     const liElement = document.createElement('li')
//     liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank # ${cryptocurrency.rank}`
//     cryptocurrencyListElement.appendChild(liElement)
// }

function displaySchoolData(schools) {
    growingSchoolsListElement.textContent = "Schools with the biggest increases in enrollment"
    shrinkingSchoolsListElement.textContent = "Schools with the biggest decreases in enrollment"
    if(filterByStateCodeElement.value === "AK") {
        schools.forEach(school => {
            if(school.statecode === "AK") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
            else if(school.enrollment_change < 0) {
                addSchoolToShrinkingList(school)
            }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "AL") {
        schools.forEach(school => {
            if(school.statecode === "AL") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
            else if(school.enrollment_change < 0) {
                addSchoolToShrinkingList(school)
            }   
            }
        })
        
        
    }
    else if (filterByStateCodeElement.value === "AR") {
        schools.forEach(school => {
            if(school.statecode === "AR") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
            else if(school.enrollment_change < 0) {
                addSchoolToShrinkingList(school)
            }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "AZ") {
        schools.forEach(school => {
            if(school.statecode === "AZ") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
            else if(school.enrollment_change < 0) {
                addSchoolToShrinkingList(school)
            }   
            }
        })
    }
    // console.log(cryptocurrencyFilterElement.value)
    // console.log(cryptocurrencies)
}


// else if (filterByStateCodeElement.value==="AK") {
//     schools.forEach(cryptocurrency => {
//         if(Number(cryptocurrency.rank) <=50) {
//             addSchoolToList(cryptocurrency)
//         }
//     })
// }

// Above code leveraged from 7.26 class time - filter on boolean is very important