<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
 const form = document.querySelector(".login-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const { email, password } = form.elements;
     const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
     if (emailValue === "" || passwordValue === "") {
      alert("All form fields must be filled in");
      return;
    }
     const formData = {
      email: emailValue,
      password: passwordValue,
    };
      console.log(formData);
        form.reset();
  });
