let students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
    return `<section class ="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
    return `<aside class ="${props[1]}">${props[0]}</aside>`
}

const student = (...props) => `
    <div id ="student">
    ${h1(props[0], `xx-large ${props[3]}`)}
    ${section(props[1], "section--padded")}
    ${aside(props[2], "pushRight")}
    </div>
`
const container = document.querySelector("#container")

for (sc of students) {
    let studentComponent = ""
    if (sc.score >= 60) {
        studentComponent = student(sc.name, sc.class, sc.info, "passing")
    } else {
        studentComponent = student(sc.name, sc.class, sc.info, "failing")
    }
    container.innerHTML += studentComponent
}