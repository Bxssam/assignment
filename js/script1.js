var dt = new Date()
document.getElementById("date").innerHTML = dt.toLocaleDateString()
var array = []
var str
window.onload = function () {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            str = this.responseText;
            array = str.split("~");
            for (var i=0;i<array.length;i++){
                array[i]= JSON.parse(array[i]);
            }
            sortByDate();
        }
    }
    xhttp.open("GET","getnews.php",true);
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

function sortByLikes() {
    var byLike = array.sort(function (a, b) {
        return b.score - a.score;
    });
    writer(byLike)
}

function sortByDate() {
    var byDate = array
    byDate.sort(function (a, b) {
        return new Date(b.time*1000) - new Date(a.time*1000);
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
