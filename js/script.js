const LIGHT = "light";
const DARK = "dark";

const backgrounds = [
    ["fiery", LIGHT],
    ["ocean", LIGHT],
    ["nightly", LIGHT],
    ["witching", LIGHT],
    ["morning", LIGHT],
    ["zinc", DARK],
];

let index = Math.floor(Math.random() * backgrounds.length);
document.body.classList.add(...backgrounds[index]);