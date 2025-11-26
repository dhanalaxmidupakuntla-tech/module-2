// DOM navigation ----navigating the structure of an HTML using JS

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// const ele = document.getElementById("fruits");
// const f1 = ele.firstElementChild;
// f1.style.color = "red";

// const el = document.getElementById("animals");
// const a1 = el.firstElementChild;
// a1.style.color = "red";

// const e = document.getElementById("birds");
// const b1 = e.firstElementChild;
// b1.style.color = "red";

// const uElement = document.querySelectorAll("ul")
// uElement.forEach(uElement => {
//     const f = uElement.firstElementChild;
//     f.style.backgroundColor = "red";

//     const l = uElement.lastElementChild;
//     l.style.backgroundColor = "green";
// })

// const el = document.getElementById("grape");
// const f = el.nextElementSibling;
// f.style.backgroundColor = "red";

// const el = document.getElementById("animals");
// const f = el.previousElementSibling;
// f.style.backgroundColor = "red";

const el = document.getElementById("animals");
const f = el.children;
Array.from(f).forEach(c => {
    c.style.color = "red";
})

