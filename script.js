// Creating the <header>
var header	= document.createElement('header');
var body	= document.querySelector('body');
body.insertBefore(header, body.firstElementChild);

var heading			= document.createElement('h1');
var headingContent	= document.createTextNode('to-do Lister');
heading.appendChild(headingContent);
heading.className 	= 'heading';

header.appendChild(heading);


// creating <div> with  class 'main'
var main 		= document.createElement('div');
main.className	= "main";
body.insertBefore(main, body.children[1]);

//create <input> with span'+' and  append it  to a div
// append this div to main
var inputDiv		= document.createElement('div');
inputDiv.className 	= 'inputDiv';
var input			= document.createElement('input');
input.type			= 'text';
input.placeholder	= 'Enter list...';
input.id 			= 'input';

var addButton = document.createElement('button');
var addButtonContent = document.createTextNode('Add');
addButton.appendChild(addButtonContent);
addButton.id= "addButton"

inputDiv.appendChild(input);
inputDiv.appendChild(addButton);

main.appendChild(inputDiv);


//Create listDiv and append it to mainDiv
var listDiv	= document.createElement('div');
listDiv.className = 'listDiv';
main.appendChild(listDiv);

//append ul list to listDiv

var ulList	=  document.createElement('ul');
listDiv.appendChild(ulList);

//Event Listeners
// on clicking the  +  button ==> addButton

addButton.addEventListener('click', function(){
	addToDoList(input.value);
});

// on clicking the X ===> .delete

ulList.addEventListener('click', liClick);

// on pressing enter on input
input.addEventListener('keypress', function(e){
	if(e.key==="Enter")
	{
		addToDoList(e.target.value);
	}
})


// adding footer

var footer = document.createElement('footer');
footer.innerHTML = "<p>&copy; 2018 Mehathab Shaik</p>"
//console.log(body.children);
body.insertBefore(footer, body.children[2]);


//functions

function addToDoList(task){
if(!!task && task !=='')
	{
		
		var list 		= document.createElement('li');
		list.className	= 'unChecked';
		var listContent = document.createTextNode(task);

		var deleteSpan 	= document.createElement('div');
		var deleteContent = document.createTextNode('x');
		deleteSpan.className = 'delete';
		deleteSpan.value	= 'delete';

		var checkbox 	= document.createElement('input');
		checkbox.type	= 'checkbox';

		deleteSpan.appendChild(deleteContent);
		
		list.appendChild(deleteSpan);
		list.appendChild(checkbox);
		list.appendChild(listContent);
		
		ulList.appendChild(list);

		input.value ='';

	}
}


function liClick(e)
{
	if(e.target.type==="checkbox")
	{
		//console.log(e.target.parentNode.classList);
		e.target.parentNode.classList.toggle("checked");
		e.target.parentNode.children[0].classList.toggle('deleteEmpower');
	}
	else if(e.target.value==='delete')
	{
		//selctor.parentNode.removeChild(child);
		e.target.parentNode.parentNode.removeChild(e.target.parentNode);

	}
}