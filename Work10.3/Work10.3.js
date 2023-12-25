
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та
// час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let date = new Date()

let sessionsFromStorage = localStorage.getItem('sessions') ;
let sessions = sessionsFromStorage ? JSON.parse(sessionsFromStorage) : []
    sessions.push(date)

localStorage.setItem('sessions', JSON.stringify(sessions))