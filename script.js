const ekleme = document.querySelector(".ekleme");
const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const yapılacak = document.querySelector(".yapılacaklar");
let düzenle;
let sil;
let text2;

const addHtml = (todo) =>{
    //create div
    const div = document.createElement("div");
    div.className = "görevList";

    //create input
    const input = document.createElement("input");
    input.setAttribute("value",todo.text);
    input.className = "text2";
    input.setAttribute("disabled","disabled")
    input.appendChild(document.createTextNode(todo.text));

    //create buttons
    const düzenle = document.createElement("button");
    düzenle.setAttribute("id","düzenle");
    düzenle.innerHTML="Düzenle"
    düzenle.addEventListener("click",düzenleme)

    const sil = document.createElement("button");
    sil.setAttribute("id","sil");
    sil.innerHTML="Sil"
    sil.addEventListener("click",silme)

    div.appendChild(input);
    div.appendChild(düzenle);
    div.appendChild(sil);
    yapılacak.appendChild(div)
    text.value = ""
}

const start = () =>{
    
    const todos =JSON.parse(localStorage.getItem("todos"));
    if(!todos){
        localStorage.setItem("todos",JSON.stringify([]));
    }else{
        todos.forEach(todo =>{
            addHtml(todo)
        })
        sil = document.querySelectorAll("#sil")
        text2 = document.querySelectorAll(".text2")
        düzenle = document.querySelectorAll("#düzenle")
    }
}



btn.addEventListener("click",() =>{
    ekleme.classList.toggle("aktif");
});

text.addEventListener("keyup", (e) =>{
    const yazı = text.value
    if(e.keyCode === 13 && yazı){
        e.preventDefault();
        const todo = {
            text: yazı,
            tamamlandı: false
        };
        
        const todos =JSON.parse(localStorage.getItem("todos"))
        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos))
        
        addHtml(todo)
        
    }
    else if(!text.value && e.keyCode === 13) alert("Lütfen yapmak istediğinizi yazınız!");    
})

const silme = (e) =>{
    const todo = e.target.parentElement;
    const text = todo.children[0].textContent;
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.filter(td => td.text != text);
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.remove();
}

const düzenleme = (e) =>{
    const todo = e.target.parentElement;
    const yazı = todo.children[0].textContent;
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.filter(td => td.yazı != yazı);
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.remove();
    text.value = yazı;
}


start();