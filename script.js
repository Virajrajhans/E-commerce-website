const bar =Document.getElementById('bar');
const nav =Document.getElementById('navbar');

if (bar) {
    bar.addEventlistener('click', ()=>{
        nav.classList.add('active');
    })
}
