const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //tworze zmienna odpowiedzialna za ip
	var ip = req.connection.remoteAddress;
    //funkcja warunkowa aby usunac prefix oznaczajacy adres ip czy jest w wersji 4 lub 6
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
      }
    //wyswietlenie adresu, daty oraz godziny
    res.send("Adres IP: " + ip + " Data i godzina: " + new Date());
});
	//nasluchiwanie na porcie 8080
app.listen(8080, () => {
    //logi
	console.log('Data uruchomienia: ' + getDate());
	console.log('Imie i nazwisko: Karol Nowak');
	console.log('Port TCP: 8080');
});
	
//funkcja zwracajaca date
function getDate(){
    var date = new Date();
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
}