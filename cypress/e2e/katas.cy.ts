describe("KATAS", () => {
  it("network katas request spy", function () {
    cy.fixture("katas.json").as("dataKatas");
    cy.intercept("POST", "*/login").as("login");
    cy.intercept(
      "https://server-stage.pasv.us/progress/codewars/completed/65d557fafa51470f34feca8e",
      { fixture: "katas.json" }
    ).as("katas"); //correct or not?

    cy.visit(`${Cypress.env("stage")}/user/login`);
    cy.get("#normal_login_email").type(Cypress.env("email"));
    cy.get("#normal_login_password").type(Cypress.env("password"), {
      log: false,
    });
    cy.get('button[type="submit"]').click();

    cy.wait("@login").then((wholeResponse) => {
      //pause until it is done
      console.log(wholeResponse, "res");
      cy.log("123");
      let id = wholeResponse.response.body.payload.user._id;
      cy.location().should((loc) => {
        console.log(loc, "loc");
        expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
        expect(wholeResponse.response.statusCode).to.eq(200);
      });
    });

    cy.visit("https://stage.pasv.us/profile/65d557fafa51470f34feca8e/katas");

    cy.wait("@katas").then((mockResponce) => {
      console.log(mockResponce, "res");
      cy.wrap(this.dataKatas).should("deep.equal", mockResponce.response.body);
      //cy.log("123");
    });
  });
});
