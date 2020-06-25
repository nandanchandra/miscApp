//alert('Connected')

var ul=document.getElementById('list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton =document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAllButton =document.getElementById('removeAll')
removeAllButton.addEventListener('click',removeAll)

function addItem(){
    //console.log('Add button clicked');
    var input =document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode =document.createTextNode(item)

    if(item ===''){
        return false;
    } 
    
    else{
     
        li=document.createElement('li')

        var checkbox=document.createElement('input')
        checkbox.type='checkbox' //creating checkbox
        checkbox.setAttribute('id','check')

        var label =document.createElement('label')
        label.setAttribute('for','item')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        //li.className='visual'
        setTimeout(()=>{
            li.className='visual'
        },2)
       
        input.value=''
     }
    
}


function removeItem(){
    // console.log('Delete button clicked');
    li=ul.children
    // console.log(li);
    
    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element);
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
        
    }
    
}

function removeAll(){
    li=ul.children
    //console.log('Delete All');
    for (let index = 0; index < li.length; index++) {
        ul.remove(li[index])
        
    }
}

