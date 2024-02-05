const notesContainer = document.querySelector('.notes-container');
const createNote = document.getElementById('create-btn');
const deleteNote = document.getElementById('delete-icon')
const note = document.querySelector('.input-box')

    createNote.addEventListener('click', ()=>{
        let inputBox = document.createElement('p');
        let img = document.createElement('img');
        inputBox.className = 'input-box';
        inputBox.setAttribute('contenteditable', 'true');
        img.src = 'Image/delete-icon.png';
        notesContainer.appendChild(inputBox).appendChild(img)
    })




//Able to create new Paragraph when pressing our create note button
//Able to delete it  with the trash icon  next to it when we press it
//Able to save the notes to localStorage so they are still available when we either close/refresh our notes app