const modal = new bootstrap.Modal('#modalProducto', {});
const btnNew = document.querySelector('#btnNew');
const btnSave = document.querySelector('#btnSave');
const btnClose = document.querySelector('#btnClose');
const frmProducto = document.querySelector('#frmProducto');
const inputName = document.querySelector('#name');
const inputMarca = document.querySelector('#marca');
const inputTask1 = document.querySelector('#task1');
const inputTask2 = document.querySelector('#task2');
const tableRow = document.querySelector('#table-students tbody');

let list = [];


btnNew.addEventListener('click', ()=>{
    modal.show();

})

btnClose.addEventListener('click', ()=> {
    modal.hide();
})


frmProducto.addEventListener('submit', (e)=> {
    e.preventDefault();
    const id = list.length + 1;
    const name = inputName.value;
    const marca = inputMarca.value;
    const task1 = inputTask1.value;
    const task2 = inputTask2.value;

    list.push({
        id,
        name,
        marca,
        task1,
        task2,
    })

    render(list);
    guardar(list);
    modal.hide();
})


function render(list){
    tableRow.innerHTML = '';
    list.forEach( producto => {
        tableRow.innerHTML += // html
        `<tr class="text-center">
            <td> ${producto.id}</td>
            <td> ${producto.name}</td>
            <td> ${producto.marca}</td>
            <td> ${producto.task1} </td>
            <td> ${producto.task2} </td>
            <td> ${producto.task3} </td>
         </tr>`
    });
}
/* ------------- Recibe el array y lo guardar en el localStorage ------------ */
function guardar(list){
    localStorage.setItem('precios', JSON.stringify(list) )
}
/* ---------- Lee el localStorage y lo retorna ---------- */
function leer(){
    const datos = JSON.parse( localStorage.getItem('precios') );
    if( datos ){
        return datos;
    } else {
        return [];
    }
}

list = leer();

render(list);