document.getElementById("translate").addEventListener("click",function () {
    const change =document.getElementById("change");
  change.innerText="এটি আমাদের মেসের নিজস্ব ওয়েবসাইট";
    const changeHeader =document.getElementById("change-header");
  changeHeader.innerText="নাজির বাড়ি মেস";
  const btn=document.getElementById("translate");
  btn.setAttribute("disabled",true)
  const reBtn=document.getElementById("re-translate")
  reBtn.classList.remove("d-none")
})
document.getElementById("re-translate").addEventListener("click",function () {
  const change =document.getElementById("change");
  change.innerText="This is our mess's own website";
    const changeHeader =document.getElementById("change-header");
  changeHeader.innerText="Najir Bari Mess";
  const reBtn=document.getElementById("re-translate")
  reBtn.classList.add("d-none")
  const btn=document.getElementById("translate");
  btn.removeAttribute("disabled",true)
})

function member1() {
  const remove=document.getElementById("remove");
  remove.classList.add("d-none")
  const add=document.getElementById("member1")
  add.classList.remove("d-none")
  const info=document.getElementById("info")
  info.classList.remove("d-none")
}
function member2() {
  const remove=document.getElementById("remove");
  remove.classList.add("d-none")
  const add=document.getElementById("member2")
  add.classList.remove("d-none")
  const info=document.getElementById("info")
  info.classList.remove("d-none")
}

function fresh() {
  location.reload()
}