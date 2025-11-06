// PinkFit Studio – form validation
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.querySelector('#registerForm,#contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.checkValidity()){
        form.classList.add('was-validated');
        const firstInvalid=form.querySelector(':invalid');
        if(firstInvalid)firstInvalid.focus();
        return;
      }
      const modalEl=document.getElementById('successModal');
      if(modalEl){
        const bsModal=new bootstrap.Modal(modalEl);
        bsModal.show();
      }else{
        alert('Form submitted successfully!');
      }
      form.reset();
      form.classList.remove('was-validated');
    });
  }
});
