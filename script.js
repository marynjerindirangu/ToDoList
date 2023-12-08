let todoItems = []

document.getElementById('inputButton').onclick = 

function getItem(){

    let inputText = document.getElementById('inputValue').value.trim();
    let list = document.createElement('li');

    //if(inputText !== ''){
      //  textItem.textContent = inputText;
   // } else{
   //     textItem.textContent = '';
   // }
    list.style.display = 'flex';
    let unorderedList = document.getElementById('inputList')
    unorderedList.appendChild(list);

      // span for the list text
      let textItem = document.createElement('span');
      textItem.textContent = inputText
      textItem.classList.add('text-item')

       //delete the list button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('delete-button')
    deleteButton.style.marginLeft= '10px';

    deleteButton.addEventListener('click', function (){
        list.remove();
     })
     //checkbox 
     let checkbox = document.createElement('input');
     checkbox.type = 'checkbox';
     checkbox.classList.add('check-box')

     checkbox.addEventListener('change',function(){
        if(checkbox.checked){
            textItem.style.textDecoration = 'line-through';
        }
     else{
        textItem.style.textDecoration = 'none';
    }
    })
    

     //append on the list element
     list.appendChild(checkbox);
     list.appendChild(textItem)
     list.appendChild(deleteButton);
 }    
 