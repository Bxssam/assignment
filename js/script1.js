var dt = new Date()
document.getElementById("date").innerHTML = dt.toLocaleDateString()
//art
var ar1 = {title:"Yarn - A new package manager for JavaScript", url:"https://code.facebook.com/posts/1840075619545360", likes:30, date:"November 5, 2017 13:30:00", comments:20}
var ar2 = {title:"Tesseractjs - Pure JavaScript OCR for 60 Languages", url:"http://tesseract.projectnaptha.com/", likes:70, date:"November 5, 2017 03:00:00", comments:345}
var ar3 = {title:"Blueprint - A React UI toolkit for the web", url:"http://blueprintjs.com/", likes:15, date:"October 25, 2017 23:10:00", comments:183}
var ar4 = {title:"Introducing Create React Native App", url:"https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html", likes:200, date:"October 27, 2017 08:40:00", comments:55}
var ar5 = {title:"Cheatsheet for the modern JavaScript", url:"https://github.com/mbeaudru/modern-js-cheatsheet", likes:"160", date:"October 20, 2017 10:30:00", comments:2}
var ar6 = {title:"WalmartLabs opensources its tool for bringing React Native to mobile apps", url:"https://techcrunch.com/2017/09/29/walmart-labs-open-sources-its-tool-for-bringing-react-native-to-existing-mobile-apps/", likes:18, date:"October 18, 2017 06:30:00", comments:220}
var ar7 = {title:"Build Go programs that run directly on the Xen hypervisor", url:"https://github.com/atmanos/atmanos", likes:25, date:"October 10, 2017 14:00:00", comments:102}
var ar8 = {title:"A new upstream project to break up Docker into independent components", url:"https://github.com/moby/moby/pull/32691", likes:38, date:"October 14, 2017 17:15:00", comments:39}
var array =[ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8]

function chg (o){
    if(o.selectedIndex ==0){
        sortByLikes()
    }
    if(o.selectedIndex ==1){
        sortByComm()
    }
    if(o.selectedIndex ==2){
        sortByDate()
    }
}
function sortByLikes(){
    var byLike = array.sort(function(a,b) {
        return b.likes - a.likes;
    });
    writer(byLike)
}

function sortByDate(){
    var byDate = array
    byDate.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date);
    });
    writer(byDate)
}

function sortByComm(){
    var byCom = array
    byCom.sort(function(a,b) {
        return b.comments - a.comments;
    });
    writer(byCom)
}

function writer(arr){
    var ul = document.getElementById('ull')
    var txt =''
    for(var i=0;i<arr.length;i++){
        txt +=`<li class="lia">
        <a class="lin" href="`+arr[i].url+`">`+arr[i].title+`</a>
        <ul>
            <li class="medul"><p>`+arr[i].likes+` likes</p>|<p>`+arr[i].date+`</p>|<p>`+arr[i].comments+` comments</p></li>
        </ul>
    </li>`
    }
    ul.innerHTML = txt
}
  