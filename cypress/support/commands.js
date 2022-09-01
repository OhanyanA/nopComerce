const getHeaders = () => {
    return {
        Authorization: `Bearer ${localStorage.getItem('id_token')}`,
    };
};

Cypress.Commands.add('xhrLogin', (email, pass) => {
    cy.request({
        method: 'POST',
        url: 'https://www.sandbox.paypal.com/xoplatform/logger/api/logger',
        body: {
            "email": email,
            "password": pass,
        },
        headers: {
           getHeaders
        },
    }).then((response) => {
        expect(response.status).to.eq(200)
    });
});
