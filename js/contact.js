const contactSubmit = document.querySelector(".submit-contact");

let data = {};
contactSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  
  let name = document.querySelector(".contact-name").value;
  let email = document.querySelector(".contact-email").value;
  let message = document.querySelector(".contact-message").value;


  data.name = name;
  data.email = email;
  data.message = message;

  
  fetch("http://localhost:5000/api/contact", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); 
      } else {
        throw new Error("Gagal mengirim data"); 
      }
    })
    .then((result) => {
      console.log("Data berhasil dikirim:", result); 
      alert("Pesan Anda telah dikirim!");
    })

    name = ""
    email = ""
    message = ""

    location.reload()
    .catch((error) => {
      console.error("Error:", error); 
      alert("Terjadi kesalahan saat mengirim pesan.");
    });

   
});
