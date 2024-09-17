const lista = document.querySelector(".lista")
//const btnAgregar = document.querySelector(".btn-agregar")


function agregar(){
    
    const form = document.querySelector(".form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        
        
        //console.log("funciona")
        
        const input = document.querySelector(".input")
        const valor = input.value
        console.log(valor)
        
        if (valor){ 
            const li = document.createElement("li")
            li.innerText = valor
            lista.appendChild(li)
            
            const elemBtn = document.createElement("button")
            elemBtn.innerText = "Eliminar"
            elemBtn.classList.add("btn-eliminar")
            li.appendChild(elemBtn)
            
            input.value = " "
            
        }else{
            console.log("no hay valor");
            lista.innerHTML = "no hay valor"
        }
    })
}
agregar()        

function eliminar(){
    lista.addEventListener("click", (e)=>{
        //console.log(e);
        if (e.target.classList.contains("btn-eliminar")){
            e.target.parentElement.remove()
        }
    })
}
eliminar()




        


        
    
    

