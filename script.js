// Function to load and display XML data
function loadXML() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            parseXML(this);
        }
    };
    xmlhttp.open("GET", "data.xml", true);
    xmlhttp.send();
}

// Function to parse and display XML data in the table
function parseXML(xml) {
    var xmlDoc = xml.responseXML;
    var information = xmlDoc.getElementsByTagName("information");
    var dataTable = document.querySelector(".data-table");

    var tbody = dataTable.getElementsByTagName("tbody")[0];

    for (var i = 0; i < information.length; i++) {
        var title = information[i].getElementsByTagName("title")[0].textContent;
        var content = information[i].getElementsByTagName("content")[0].textContent;
        var keyword = information[i].getElementsByTagName("keyword")[0].textContent;
        var summary = information[i].getElementsByTagName("summary")[0].textContent;

        var row = tbody.insertRow(i);

        var cell1 = row.insertCell(0);
        cell1.innerHTML = title;

        var cell2 = row.insertCell(1);
        cell2.innerHTML = content;

        var cell3 = row.insertCell(2);
        cell3.innerHTML = keyword;

        var cell4 = row.insertCell(3);
        cell4.innerHTML = summary;
    }
}

// Load XML data when the page loads
window.onload = loadXML;
