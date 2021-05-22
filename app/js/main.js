document.addEventListener("DOMContentLoaded", () => {

    const featureLinkElems = document.querySelectorAll(".feature__link"),
          featureSubElems = document.querySelectorAll(".feature-sub");

    featureLinkElems.forEach((item, index) => {
        item.addEventListener("click", () => {
            if(item.classList.contains("feature__link_active")){
                item.classList.remove("feature__link_active");
                featureSubElems[index].classList.add("hidden");
            } else {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add("hidden");
                });
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove("feature__link_active")
                });
                featureSubElems[index].classList.remove("hidden");
                item.classList.add("feature__link_active");
            }
        })
    });


    
})

