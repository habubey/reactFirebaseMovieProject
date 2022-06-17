import emailjs from "emailjs-com";
import "./FormStil.css";


const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs
      .sendForm(
        "service_15e2b6o",
        "template_r2h8i8e",
        e.target,
        "a5RLJ3Vuo9-HfQ5nN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="formStil">
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
   
    
      <form onSubmit={sendEmail} className="formStil">
     <input type="text" name="name"   placeholder="name" required/>
     <input type="email" name="email" placeholder="email adress" required/>
     <input type="text" name="subject" placeholder="yout subject" required/>
      <textarea name="message" placeholder="your message" required></textarea>
     <button type="submit">Send</button>
    </form>
       
     
       
    </div>
  );
};

export default Mailer;