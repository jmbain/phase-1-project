alert("Site still under construction :/")

console.log("Really tho it's under construction...")
fetch("http://localhost:3000/schools")
.then(response => response.json())
.then(schools => {
    console.log(schools)
})

//note Can create a "sample" json file by standing up a non-existant json server (refer to code challenge for specfic commands)