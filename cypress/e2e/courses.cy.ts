import { log } from "console";

describe("COURSES", () => {
  it("network courses request spy", function () {
    cy.fixture("courses.json").as("dataCourses");
    cy.intercept("POST", "*/login").as("login");
    cy.intercept(
      "https://server-stage.pasv.us/course/view/5d1cbf67086fc30038bf1859",
      { fixture: "courses.json" }
    ).as("courses");

    cy.visit(`${Cypress.env("stage")}/user/login`);
    cy.get("#normal_login_email").type(Cypress.env("email"));
    cy.get("#normal_login_password").type(Cypress.env("password"), {
      log: false,
    });
    cy.get('button[type="submit"]').click();
    cy.wait("@login").then((wholeResponse) => {
      console.log(wholeResponse, "res");
      cy.log("123");
      let id = wholeResponse.response.body.payload.user._id;
      cy.location().should((loc) => {
        console.log(loc, "loc");
        expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
        // failOnStatusCode: false
        expect(wholeResponse.response.statusCode).to.eq('200');
      });
    });

    cy.visit("https://stage.pasv.us/course/5d1cbf67086fc30038bf1859");
    cy.visit("@courses").then((mockResponce) => {
      console.log(mockResponce, "res");
      cy.wrap(this.dataCourses).should("deep.equal", mockResponce.response.body);
    });
  });
});
