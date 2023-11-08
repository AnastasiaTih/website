const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
    document.getElementsByTagName('div')[4].innerText="Anastasia"
}
node_for_click_name.addEventListener("click",find_edit_name)

const node_for_click_name2 = document.getElementById("for_click_name2")
function find_edit_name2(){
    document.getElementsByTagName('div')[3].innerText="Tikhomirova"
}
node_for_click_name2.addEventListener("click",find_edit_name2)

const node_for_click_name3 = document.getElementById("for_click_name3")
function find_edit_name3(){
    document.getElementsByTagName('div')[5].innerText="Dmitrievna"
}
node_for_click_name3.addEventListener("click",find_edit_name3)

const node_for_click_day = document.getElementById("for_click_day")
function find_edit_day(){
    document.getElementsByTagName('div')[7].innerText="24 may 2004"
}
node_for_click_day.addEventListener("click",find_edit_day)