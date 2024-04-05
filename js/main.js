
// const modalRegister = document.querySelector("#modalRegister")



const save = document.querySelector("#save")

save.addEventListener('click', e => {
    const configModalHTML = document.querySelector('#configModal')
    const configModal = bootstrap.Modal.getInstance(configModalHTML)
    
    configModal.hide();

    console.log("puto");
})

const swchFocus = document.querySelector("#swchFocus")

const swchBreak = document.querySelector("#swchBreak")

const swchLongBreak = document.querySelector("#swchLongBreak")


swchFocus.addEventListener("click", e => {
    console.log("Focus");
})

swchBreak.addEventListener("click", e => {
    console.log("Break");
})

swchLongBreak.addEventListener("click", e => {
    console.log("Long Break");
})

const volumenInput = document.querySelector("#volumenInput")
const volumenHelpInline = document.querySelector("#volumenHelpInline")

volumenInput.addEventListener('input', e => {
    volumenHelpInline.innerHTML = `${volumenInput.value}%`
})



