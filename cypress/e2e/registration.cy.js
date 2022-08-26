import {selectors} from "../support/selectors";
import commonCommands from "../Commands/commonCommands";

describe('Registration in "OpenCart" via UI', function () {
    let mail = 'test' + Date.now() + '@mail.com';
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
        commonCommands.fillInField(selectors().emailField, mail);
        commonCommands.select(selectors().countryField, "Albania");
        commonCommands.fillInField(selectors().passwordField, password)
        commonCommands.wait(5000)
        commonCommands.clickBtn(selectors().registerBtn)
        commonCommands.assertion("Welcome to OpenCart, your account has been created")
        cy.request({
            method: 'POST',
            url: 'https://www.sandbox.paypal.com/xoplatform/logger/api/logger',
            body: {
                "email": mail,
                "password": password,
            },
            headers: {
                Authorization: 'Bearer uid_1c5246eee3_mdy6mzy6mze'
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
        });

    });
})
