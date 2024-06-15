var agree=document.getElementById("agree")
 
agree.addEventListener('change',function()
{
    let register=document.getElementById("register");
    if(agree.checked)
    {
        register.removeAttribute("disabled")
    }
    else
    {
        register.setAttribute("disabled","disabled")
    }
}
)