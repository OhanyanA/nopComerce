import {Elements} from "../support/locators";
import commonCommands from "../Commands/commonCommands";

describe('Log in nopCommerce', function () {
    let email = 'test' + Date.now() + '@example.com';
    let userName = "user" + Date.now();
    let firstName = "firstName" + Date.now();
    let lastName = "lastName" + Date.now();
    let password = Date.now();
    beforeEach(() => {
        cy.visit("/");
    });
    it('Registration and Log in with valid data', function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, email);
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, password);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("Your registration completed");
        commonCommands.clickBtn(Elements().logOutIcon);
        commonCommands.assertion("Welcome to our store");
        commonCommands.reload();
        commonCommands.clickBtn(Elements().logInIcon);
        commonCommands.scroll("center");
        commonCommands.fillInField(Elements().emailLogIn, email);
        commonCommands.fillInField(Elements().passwordLogIn, password);
        commonCommands.clickBtn(Elements().logInBtn);
        commonCommands.assertion("Welcome to our store");
    });

    it('Log in with invalid mail', function () {
        commonCommands.clickBtn(Elements().logInIcon);
        commonCommands.fillInField(Elements().emailLogIn, "email");
        commonCommands.fillInField(Elements().passwordLogIn, password);
        commonCommands.clickBtn(Elements().logInBtn);
        commonCommands.assertion("Wrong email");
    });
    it('Log in with invalid password', function () {
        commonCommands.clickBtn(Elements().logInIcon);
        commonCommands.fillInField(Elements().emailLogIn, email);
        commonCommands.fillInField(Elements().passwordLogIn, "password");
        commonCommands.clickBtn(Elements().logInBtn);
        commonCommands.assertion("Login was unsuccessful. Please correct the errors and try again." +
            "The credentials provided are incorrect");
    });
});