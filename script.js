document.querySelector(".search_box").onchange = function(){
  let search = document.getElementsByTagName("input")[0].value
  let btn = "<a href='https://www.google.com/search?q=" + search + "'><span>Поиск</span><i></i></a>"
  document.querySelector(".search").innerHTML = btn
}