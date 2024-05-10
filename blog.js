function redirectToPage() {
      
    window.location.href = '7.html'; 
  }
  function redirectToPage1() {
    
    window.location.href = '8.html'; 
  }
  function redirectToPage2() {
    
    window.location.href = '9.html'; 
  }
  function redirectToPage3() {
    
    window.location.href = '10.html'; 
  }
  function redirectToPage4() {
    
    window.location.href = '11.html'; 
  }
  function redirectToPage5() {
    
    window.location.href = '12.html'; 
  } function redirectToPage6() {
    
    window.location.href = '13.html'; 
  } function redirectToPage7() {
    
    window.location.href = '14.html'; 
  } function redirectToPage8() {
    
    window.location.href = '15.html'; 
  }
  function redirectToPage10() {
    
    window.location.href = 'blog.html'; 
  }
 






  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display popup message
    alert('Feedback submitted successfully');

    // Optionally, reset the form
    this.reset();
});