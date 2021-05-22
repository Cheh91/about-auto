const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smothScrollElems.forEach(item => {
    item.addEventListener("click", (e) => {
        // console.log("a#");
        e.preventDefault();

        const id = item.getAttribute("href").substring(1);
        // console.log(id);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        })
    })
})



