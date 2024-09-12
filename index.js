function validateEmailInput() 
  {
  const emailInput = document.getElementById('emailInput').value;
  const feedbackElement = document.getElementById('emailFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }}
  function data(){
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    if(a=="" || b=="" || c=="")
    {
      alert("All fields are mandatory");
      return false;
    }else
    {
       true;
    }
  }