class LocalCodingLogin {
    email: string = '[id="normal_login_email"]'
    password: string = '[id="normal_login_password"]'
    loginButton: string = 'button[type="submit"]'

    buttonLogin(email: string, password: string): void {
        cy.get(this.email).type(email);
        cy.get(this.password).type(password, {log: false});
        cy.get(this.loginButton).click();
    }

}
export const LocCodingLogin = new LocalCodingLogin()