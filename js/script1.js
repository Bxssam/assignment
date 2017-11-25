var dt = new Date()
document.getElementById("date").innerHTML = dt.toLocaleDateString()
var array = []

window.onload = function () {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var cc = JSON.parse(xhttp.responseText);
            for (var i = 0; i < 30; i++) {
                var art = cc[i]
                var newzUrl = 'https://hacker-news.firebaseio.com/v0/item/' + art + '.json?print=pretty'
                addNewz(newzUrl)
            }

        }
    }
    xhttp.open("GET", "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", true);
    xhttp.send();

}

function chg(o) {
    if (o.selectedIndex == 0) {
        sortByLikes()
    }
    if (o.selectedIndex == 1) {
        sortByComm()
    }
    if (o.selectedIndex == 2) {
        sortByDate()
    }
}

function addNewz(newzUrl) {
    var xhttp2 = new XMLHttpRequest()
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var newNews = JSON.parse(xhttp2.responseText)
            array.push(newNews)
            if(array.length==30){
                sortByDate()
            }
        }
    }
    xhttp2.open("GET", newzUrl, true);
    xhttp2.send();
}

function sortByLikes() {
    var byLike = array.sort(function (a, b) {
        return b.score - a.score;
    });
    writer(byLike)
}

function sortByDate() {
    var byDate = array
    byDate.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    writer(byDate)
}

function sortByComm() {
    var byCom = array
    byCom.sort(function (a, b) {
        return b.descendants - a.descendants;
    });
    writer(byCom)
}

function writer(arr) {
    var ul = document.getElementById('ull')
    var txt = ''
    for (var i = 0; i < arr.length; i++) {
        var da = new Date(arr[i].time * 1000)
        txt += `<li class="lia">
        <a class="lin" href="` + arr[i].url + `">` + arr[i].title + `</a>
        <ul>
            <li class="medul"><p>` + arr[i].score + ` likes</p>|<p>` + da.toUTCString() + `</p>|<p>` + arr[i].descendants + ` comments</p></li>
        </ul>
    </li>`
    }
    ul.innerHTML = txt
}
