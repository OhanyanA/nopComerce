import {selectors} from "../support/selectors";
import commonCommands from "../Commands/commonCommands";

describe('Registration in "OpenCart" via UI', function () {
    let email = 'test' + Date.now() + '@example.com';
    let userName = "user" + Date.now();
    let firstName = "firstName" + Date.now();
    let lastName = "lastName" + Date.now();
    let password = Date.now();
    beforeEach(() => {
        cy.visit("/");
    });
    it('Registration in "OpenCart', function () {
        commonCommands.clickBtn(selectors().registrationBtn);
        commonCommands.fillInField(selectors().userNameField, userName);
        commonCommands.fillInField(selectors().firstNameField, firstName);
        commonCommands.fillInField(selectors().lastNameField, lastName);
        commonCommands.fillInField(selectors().emailField, email);
        commonCommands.select(selectors().countryField, "Albania");
        commonCommands.fillInField(selectors().passwordField, password)
        commonCommands.wait(5000) // this wait is for captcha verification
        commonCommands.clickBtn(selectors().registerBtn)
        commonCommands.assertion("Welcome to OpenCart, your account has been created")
        cy.xhrLogin(email,password) // this is api function for login
    });
})
