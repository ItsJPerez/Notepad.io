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
        let inputBox = document.createElement('p');
        let img = document.createElement('img');
        inputBox.className = 'input-box';
        inputBox.setAttribute('contenteditable', 'true');
        img.src = 'Image/delete-icon.png';
        notesContainer.appendChild(inputBox).appendChild(img)
    })

    notesContainer.addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){
            e.target.parentElement.remove();
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