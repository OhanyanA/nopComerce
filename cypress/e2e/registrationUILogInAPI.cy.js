import {Elements} from "../../support/selectors";
import commonPages from "../pages/commonPages";
// import commonPages from "../pages/commonPages";
// import commonPages from "../../Pages/commonPages";

describe('Register in NopCommerce',fun=> {
    beforeEach(() => {
        cy.visit("/")
    })
    it("Register in 'NopCommerce' via UI", function () {

        commonPages.clickBtn(Elements().registerIcon);
        commonPages.clickBtn(Elements().gender);
        commonPages.fillInField(Elements().firstName, "test013");
        commonPages.fillInField(Elements().lastName, "lastName13");
        commonPages.fillInField(Elements().email, "testertest013@mail.com");
        commonPages.fillInField(Elements().password, "123456abcd");
        commonPages.fillInField(Elements().confirmPassword, "123456abcd");
        commonPages.clickBtn(Elements().registerBtn)
        cy.request({
            method: 'POST',
            url: 'https://demo.nopcommerce.com/login?returnurl=%2F',
            body: {
                "email": "testertest013@mail.com",
                "password": "123456abcd"
            },
            headers: {
                "Authorization": "Bearer uid_1c5246eee3_mdy6mzy6mze",
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            expect(response.status).to.eq(400);
            cy.wait(2000);
            cy.log(response.body.accessToken);
            localStorage.setItem('accessToken', response.body.accessToken);
            cy.wait(2000);
            cy.reload()
        });
    });
});
