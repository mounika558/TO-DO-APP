
        function add(){
        const task=document.getElementById('input').value;
        const val=task;
        const element=document.getElementById('items');
        if(task===""){
            alert("Add your task before adding");
        }
        else{
            const node=document.createElement('div');
            node.className='task';
            const p=document.createElement('p');
            p.innerHTML=val;
            node.appendChild(p);
            const i=document.createElement('i');
            i.className='fa-solid fa-trash';
            i.style.cursor='pointer';
            i.addEventListener('click', del);
            node.appendChild(i);
            element.appendChild(node);
            const br=document.createElement('br');
            element.appendChild(br);
            document.getElementById('input').value= " ";

        }
    }
    function del(event) {
        const task = event.target.closest('.task');  // Get the closest task element
        if (task) {
            task.remove();  // Remove the task element from the DOM
        }
    }