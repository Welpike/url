// Welpike - welpike.github.io
const url_generated_show = document.getElementById("url_generated"), 
      url_msg = document.getElementById("url_msg"), 
      url_output = document.getElementById("url_output");
function url_maker(){
  var url_input = document.getElementById("form-url").value;
  url_input = new URL(url_input);
  if(url_input != null){
    url_generated_show.classList.toggle("d-none");
    url_msg.innerText = "url generated successfuly";
    url_output.innerText = "welpike.github.io/url.html?redirect=" + encodeURIComponent(url_input);
  }
  else{
    url_msg.innerText = "error";
  }
}
copy=(e)=>{
  e.preventDefault();
  navigator.clipboard.writeText(url_output.outerText).then(() => {
      alert("url copied");    
  })
}
