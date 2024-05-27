function handleFormSubmit(event) {
    event.preventDefault();
    window.location.href = 'main web.html';

    var fn=document.getElementById("fName").value;
    var ln=document.getElementById("lName").value;
    var sx=document.getElementById("sex").value;
    var em=document.getElementById("Email").value;
    var rs=document.getElementById("reason").value;

    localStorage.setItem('firstname', fn);
    localStorage.setItem('lastname', ln);
    localStorage.setItem('sex', sx);
    localStorage.setItem('email', em);
    localStorage.setItem('reason', rs);
}