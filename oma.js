function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }


//Sää, Jaala
    fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=jaala&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28')
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
        tehtava4Data(responseJson, "saaJaala");
    })
    .catch(function(error) {
        document.getElementById("saaJaala").innerHTML = 
            "<p>Jaalan sääietoja ei pystytä hakemaan</p>";
    });



//Sää
function tehtava4Data(data, elementId) {
    var tekstit = [];

    tekstit.push("<ul>");
    tekstit.push("<li>Paikkakunta: " + data.name + "</li>");
    
    var kuvaus = data.weather[0].description;
    tekstit.push("<li>Säätila: " + kuvaus + "</li>");
    
    var lampotila = data.main.temp;
    tekstit.push("<li>Lämpötila: " + lampotila + " &deg;C</li>");
    
    var tuuli = data.wind.speed;
    tekstit.push("<li>Tuulen nopeus: " + tuuli + " m/s</li>");
    
    tekstit.push("</ul>");

    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    tekstit.push("<img src='" + kuva + "' alt='Säätilan kuva'>");

    document.getElementById(elementId).innerHTML = tekstit.join('');
}

