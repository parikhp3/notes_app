const noteForm = document.getElementById('note-form')
if (noteForm) {
    noteForm.addEventListener('submit', addNode);
}

function NoteData(userId, title, description, deadline, notifications) {
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.notifications = notifications;
}

async function getNotes(e) {
    const user = JSON.parse(await localStorage.getItem('user'));
    if (!user)
        window.location.href = "login.html";

    try {
        const res = await fetch(`http://localhost:3000/note/getAllNotes/${user.user_id}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
        });

        const result = await res.json();
        console.log("dadsa");
            console.log(result);

        if (!result.error) {
            const notes = document.querySelector('.notes');

            result.forEach(note => {
                notes.insertAdjacentHTML("beforebegin", `<p class="note-text">${note.description}</p>`);
            })
        }
        
    } catch (err) {
        console.log(err);
    }
}

window.addEventListener("load", async (event) => {
    await getNotes();
});

async function addNode(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        window.location.href = 'login.html';
    }


    const note = document.getElementById('inputbox').value;
    
    const noteData = new NoteData(user.user_id, '', note, '', '');
    console.log(noteData);

    try {
        const res = await fetch("http://localhost:3000/note/createNote", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(noteData),
        });

        const result = await res.json();
        if (!result.error) {
            window.location.href = "note.html"
        } else {
            const err = document.querySelector('.err')
            err.innerText = result.error;
            err.style.display = 'block';
            err.style.color = 'red';
        }
        
    } catch (err) {
        console.log(err);
    }
}