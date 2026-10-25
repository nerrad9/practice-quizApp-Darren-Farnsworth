import questions from './questions.json' with { type: 'json' };

const question = document.getElementById("question")
const ans = Array.from(document.querySelectorAll("button[class='ans']"))
ans.forEach(a=>a.addEventListener("click", () => {s=Number(a.id);hideQuestion();}))
const wl = document.getElementById("wl")
const solution = document.getElementById("solution")
const next = document.getElementById("next")
next.addEventListener("click", hideSolution)

let q = null;
let s = null;

function chooseQuestion(){
    const keys = Object.keys(questions)
    const ran = ~~(Math.random()*keys.length)
    q = questions[keys[ran]]
    resetQuestion()
}

function resetQuestion(){
    question.innerText = q["question"]
    ans.forEach((a, i) => {a.innerText = q["answers"][i]})
}
function hideQuestion(){
    question.style.display = 'none'
    ans.forEach(a=>a.style.display = 'none')
    wl.style.display = 'block'
    solution.style.display = 'block'
    next.style.display = 'block'
    showSolution()
}
function showSolution(){
    if (s == q["correct"]){wl.src = "./green.jpeg";wl.alt="correct"}
    else{wl.src = "./red.webp";wl.alt="incorrect"}
    solution.innerText = q["solution"]
}
function hideSolution(){
    question.style.display = 'block'
    ans.forEach(a=>a.style.display = 'block')
    wl.style.display = 'none'
    solution.style.display = 'none'
    next.style.display = 'none'
    chooseQuestion()
}

chooseQuestion()