class Login {
  userName: string = "#userName";
  password: string = "#password";
  loginButton: string = "#login";
  logOutButton: string = "#submit";

  submitButtonLogin() {
    cy.get(this.userName).type(process.env.EMAIL);
    cy.get(this.password).type(process.env.PASSWORD);
    cy.get(this.loginButton).click();
    cy.contains("Log out");
  }
}

export const LoginPage = new Login();

//LoginPage.submitButtonLogin
