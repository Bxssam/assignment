var dt = new Date()
document.getElementById("date").innerHTML = dt.toLocaleDateString()
var array = []
window.onload = function () {
    getArr()
}

//art
function getArr() {
    var x = document.getElementById('ull').children
    for (var i = 0; i < x.length; i++) {
        var y = {
            title: x[i].children[0].textContent,
            url: x[i].children[0].href,
            likes: parseInt(x[i].children[1].childNodes[1].children[0].textContent.split(' ')[0]),
            date: new Date(x[i].children[1].childNodes[1].children[1].textContent),
            comments: parseInt(x[i].children[1].childNodes[1].children[2].textContent.split(' ')[0])
        }
        array.push(y)
    }
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
        return b.likes - a.likes;
    });
    writer(byLike)
}

function sortByDate() {
    var byDate = array
    byDate.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    writer(byDate)
}

function sortByComm() {
    var byCom = array
    byCom.sort(function (a, b) {
        return b.comments - a.comments;
    });
    writer(byCom)
}

function writer(arr) {
    var ul = document.getElementById('ull')
    var txt = ''
    for (var i = 0; i < arr.length; i++) {
        txt += `<li class="lia">
        <a class="lin" href="` + arr[i].url + `">` + arr[i].title + `</a>
        <ul>
            <li class="medul"><p>` + arr[i].likes + ` likes</p>|<p>` + arr[i].date.toUTCString() + `</p>|<p>` + arr[i].comments + ` comments</p></li>
        </ul>
    </li>`
    }
    ul.innerHTML = txt
}