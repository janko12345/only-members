const modal = document.querySelector(".modal");
const postForm = document.querySelector(".post-form");
const bubble = document.querySelector(".create-post-bubble");
const gear = document.querySelector(".post-form__config-img");
const config = document.querySelector(".post-form__config");
const title = document.querySelector(".post-form__title");
const content = document.querySelector(".post-form__body");

/* bubble action */
bubble.addEventListener("click", event =>{
    modal.classList.toggle("display-show");
    postForm.classList.toggle("display-show");
})

modal.addEventListener("click", event =>{
    if(event.target === modal){
        modal.classList.remove("display-show");
        postForm.classList.remove("display-show");
    }
})

gear.addEventListener("click", event => {
    gear.classList.toggle("rotate-360");
    config.classList.toggle("opacity-1");
})

/* config action */
config.addEventListener("click", event =>{
    if(event.target.tagName !== "OPTION")
        return;
    const option = event.target;
    if(option.parentElement.id.includes("title-color"))
        title.style.color = option.value;
    else if(option.parentElement.id.includes("content-color")){
        content.style.color = option.value;
    }
})