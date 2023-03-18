// Welpike - welpike.github.io
const url_generated_show = document.getElementById("url_generated"), 
      url_msg = document.getElementById("url_msg"), 
      url_output = document.getElementById("url_output");
function url_maker(){
    var url_input = document.getElementById("form-url").value;
    var delay_input = document.getElementById("form-delay").value;
    url_input = new URL(url_input);
    if(url_input != null && delay_input != null){
        url_generated_show.classList.toggle("d-none");
        url_msg.innerText = "url generated successfuly";
        url_output.innerText = "https://welpike.github.io/url/url.html?redirect=" + encodeURIComponent(url_input) + "&delay=" + delay_input;
    }
    else{
        url_msg.innerText = "error";
    }
}
