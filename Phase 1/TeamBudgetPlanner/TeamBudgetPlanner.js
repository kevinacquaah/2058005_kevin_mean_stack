function storeData() {
    let clientName = document.getElementById("clientName").value;
    let projectName = document.getElementById("projectName").value;
    let Budget = document.getElementById("budget").value;
    projectz = JSON.parse(localStorage.getItem("projectz") || "[]");
    let project = {cl:clientName, pr:projectName, bd:Budget};
    console.log(JSON.stringify(project));
    projectz.push(project);
    localStorage.setItem("projectz", JSON.stringify(projectz));
}

function displayData() {
    let projectArr = JSON.parse(localStorage.getItem("projectz"));
    console.log(localStorage.getItem("projectz").length)
    var tableContent="";
    var startTable ="<table border=1><tr><th>Client</th><th>Project</th><th>Budget</th></tr>";

    projectArr.forEach(prjJson=>{
        tableContent =tableContent+"<tr><td>"+prjJson.cl+"</td><td>"+prjJson.pr+"</td><td>"+prjJson.bd+"</td></tr>";
    })

    var endTable="</table>";
    tableContent = startTable+tableContent+endTable;
    document.getElementById("main").innerHTML=tableContent;
}

function clearData() {
    document.getElementById('clientName').value = '';
    document.getElementById('projectName').value = '';
    document.getElementById('budget').value = '';
}