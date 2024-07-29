alert("Site still under construction :/")

//____________________________FETCH/API CALLS HERE__________________________________________
console.log("Really tho it's under construction...")
fetch("http://localhost:3000/schools")
.then(response => response.json())
// .then(console.log(response))
.then(schools => {
    filterByStateCodeElement.addEventListener('change', () => {
        // console.log("Logging if the change event listener is working")
        displaySchoolLists(schools)
    })
    // schools.forEach(addSchoolToList)  
})

//____________________________GLOBAL VARIABLES DECLARED HERE________________________________

const hoveredSchoolElement = document.getElementById("hovered-school")
const displayedSchoolElement = document.getElementById("displayed-school")
const filterByStateCodeElement = document.getElementById("filter-by-state-code")
const growingSchoolsListElement = document.getElementById("growing-schools-list")
const shrinkingSchoolsListElement = document.getElementById("shrinking-schools-list")

//___________________________FUNCTIONS DEFINED HERE_________________________________________
function addSchoolToGrowingList(school) {
    const liElement = document.createElement('li')
    liElement.textContent = `${school.name}`
    liElement.addEventListener('click', () => {
        displaySchoolData(school)
        displayedSchoolElement.textContent = `You are currently viewing details for ${school.name}.`
    })
    liElement.addEventListener('mouseover', () => {
        hoveredSchoolElement.textContent = `Click now to see more data about ${school.name}!`
    })
    growingSchoolsListElement.appendChild(liElement)
}

function addSchoolToShrinkingList(school) {
    const liElement = document.createElement('li')
    liElement.textContent = `${school.name}`
    liElement.addEventListener('click', () => {
        displaySchoolData(school)
        displayedSchoolElement.textContent = `You are currently viewing details for ${school.name}.`
    })
    liElement.addEventListener('mouseover', () => {
        hoveredSchoolElement.textContent = `Click now to see more data about ${school.name}!`
    })
    shrinkingSchoolsListElement.appendChild(liElement)
}

function displaySchoolData(school) {
    // currentlyDisplayedSchool = school.id
    const enrollment2020TableDataElement = document.getElementById("td-2020-enrollment")
    enrollment2020TableDataElement.textContent = ""
    enrollment2020TableDataElement.textContent = school.enrollment2020
    const enrollment2023TableDataElement = document.getElementById("td-2023-enrollment")
    enrollment2023TableDataElement.textContent = ""
    enrollment2023TableDataElement.textContent = school.enrollment2023
    const enrollmentChangeTableDataElement = document.getElementById("td-enrollment-change")
    enrollmentChangeTableDataElement.textContent = ""
    enrollmentChangeTableDataElement.textContent = school.enrollment_change
}


function displaySchoolLists(schools) {
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
    else if (filterByStateCodeElement.value === "CA") {
        schools.forEach(school => {
            if(school.statecode === "CA") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
                else if(school.enrollment_change < 0) {
                    addSchoolToShrinkingList(school)
                }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "CO") {
        schools.forEach(school => {
            if(school.statecode === "CO") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
                else if(school.enrollment_change < 0) {
                    addSchoolToShrinkingList(school)
                }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "CT") {
        schools.forEach(school => {
            if(school.statecode === "CT") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
                else if(school.enrollment_change < 0) {
                    addSchoolToShrinkingList(school)
                }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "DE") {
        schools.forEach(school => {
            if(school.statecode === "DE") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
                else if(school.enrollment_change < 0) {
                    addSchoolToShrinkingList(school)
                }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "FL") {
        schools.forEach(school => {
            if(school.statecode === "FL") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
                else if(school.enrollment_change < 0) {
                    addSchoolToShrinkingList(school)
                }   
            }
        })
    }
    else if (filterByStateCodeElement.value === "GA") {
        schools.forEach(school => {
            if(school.statecode === "GA") {
                if(school.enrollment_change > 0 ) {
                    addSchoolToGrowingList(school)
                }
                else if(school.enrollment_change < 0) {
                    addSchoolToShrinkingList(school)
                }   
            }
        })
    }
}


