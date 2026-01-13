const button = document.getElementById('Button');

button.addEventListener('click', 
function()
{
    button.classList.toggle('active');
    
    const hasClass = button.classList.contains('active');
    console.log('class:', hasClass);

    if(hasClass)
    {
        button.textContent = 'Class is active';
        button.style.backgroundColor = 'lightgreen';

    }
    else{
        button.textContent = 'Class is not active';
        button.style.backgroundColor = 'lightcoral';
    }
})