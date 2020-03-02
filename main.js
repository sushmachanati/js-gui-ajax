const students= document.querySelector('#students');
const guest=document.querySelector('#guest');

button.addEventListener("click", sum);
function sum()
{
  const te=2;
  console.log(Number(students.value)+te)
  guest.innerHTML = `staff: ${Number(students.value)+te}`;
  
}
