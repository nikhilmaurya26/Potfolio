console.log("Script running")
document.querySelector('.cross').style.display('none');
document.querySelector('.threedot').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
})