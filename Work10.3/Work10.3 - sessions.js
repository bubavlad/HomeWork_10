let sessionsFromStorage = localStorage.getItem('sessions') ;
let sessions = sessionsFromStorage ? JSON.parse(sessionsFromStorage) : []
for (let i = 0; i < sessions.length; i++) {
    let p = document.createElement('p')
    p.innerText = sessions[i]
    document.body.appendChild(p)
}