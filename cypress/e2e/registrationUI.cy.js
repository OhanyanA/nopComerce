import {Elements} from "../support/locators";
import commonCommands from "../Commands/commonCommands";

describe('Register in NopCommerce', fun => {
    let email = 'test' + Date.now() + '@example.com';
    let firstName = "firstName" + Date.now();
    let lastName = "lastName" + Date.now();
    let password = Date.now();
    beforeEach(() => {
        cy.visit("https://demo.nopcommerce.com/")
    })
    it("Register in 'NopCommerce' via UI", function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.clickBtn(Elements().gender);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, email);
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, password);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("Your registration completed")
    });
    it('Registration with invalid email', function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.clickBtn(Elements().gender);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, "mail.am");
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, password);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("Wrong email")
    });
    it('Registration without data', function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("First name is required.", "Last name is required.");
        commonCommands.assertion("Password is required.");
        commonCommands.assertion("Email is required.")
    });
    it("Confirm wrong email", function () {
        commonCommands.clickBtn(Elements().registerIcon);
        commonCommands.clickBtn(Elements().gender);
        commonCommands.fillInField(Elements().firstName, firstName);
        commonCommands.fillInField(Elements().lastName, lastName);
        commonCommands.fillInField(Elements().email, email);
        commonCommands.fillInField(Elements().password, password);
        commonCommands.fillInField(Elements().confirmPassword, "145236789");
        commonCommands.clickBtn(Elements().registerBtn);
        commonCommands.assertion("The password and confirmation password do not match.")
    })
})


