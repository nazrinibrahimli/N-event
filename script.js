
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>
    {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove("show")

        }
    })
})


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));

const hiddenElementsAnother = document.querySelectorAll(".hiddenRight");
hiddenElementsAnother.forEach((el)=>observer.observe(el));


const date = new Date();
console.log(date)