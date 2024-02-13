const notesContainer = document.querySelector('.notes-container');
const createNote = document.getElementById('create-btn');
let note = document.querySelector('.input-box')

    let showNote = () => {
        notesContainer.innerHTML = localStorage.getItem('note');
    }
    showNote();


    let updateStorage = () => {
        localStorage.setItem('note', notesContainer.innerHTML)
    }

    createNote.addEventListener('click', ()=>{
        let div = document.createElement('div')
        div.setAttribute('class', 'note-container')
        //Created the two elements above
        
        let inputBox = document.createElement('p');
        let img = document.createElement('img');
        inputBox.className = 'input-box';
        inputBox.setAttribute('contenteditable', 'true');
        img.src = 'Image/delete-icon.png';
        div.append(inputBox);
        notesContainer.appendChild(div).appendChild(inputBox).appendChild(img)
    })


    notesContainer.addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){
            let theDiv = document.querySelector('.note-container');
            theDiv.remove()
            updateStorage();
        } else if(e.target.tagName === 'P'){
            note = document.querySelectorAll('.input-box')
            note.forEach(nt => {
                nt.onkeyup = function(){
                    updateStorage()
                }
            })
        }
    })
    

    document.addEventListener('keydown', event => {
        if(event.key === 'Enter'){
            document.execCommand('insertLineBreak');
            event.preventDefault();
        }
    })