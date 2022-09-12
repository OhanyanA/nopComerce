import {Elements} from "../support/locators";
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
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, email);
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, password);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("Your registration completed");
    });

    it("Registration without data", function (){
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("First name is required.");
        commonCommands.assertion("Last name is required.");
        commonCommands.assertion("Email is required.");
        commonCommands.assertion("Password is required.")
    });

    it("Registration with invalid mail", function (){
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, "email");
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, password);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("Wrong email");
    })

    it('Confirm wrong password', function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, email);
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, "password");
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("The password and confirmation password do not match.")
    });
    it('Registration without first name', function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, email);
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, "password");
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("First name is required.");
    });



    // commonCommands.fillInField(Elements().emailField, email);
        // commonCommands.select(Elements().countryField, "Albania");
        // commonCommands.fillInField(Elements().passwordField, password)
        // commonCommands.wait(5000) // this wait is for captcha verification
        // commonCommands.clickBtn(selectors().registerBtn)
        // commonCommands.assertion("Welcome to OpenCart, your account has been created")
        // cy.xhrLogin(email,password) // this is api function for login

})
