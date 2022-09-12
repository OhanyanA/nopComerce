import "../support/selectors"

class commonCommands {

    static clickBtn(btn) {
        cy.get(btn).click()
    };
    static fillInField(field, value) {
        cy.get(field)
            .type(value)
    };
    static  wait(time){
    cy.wait(time)
    };
    static select(field, value){
        cy.get(field)
            .select(value)
    };
    static assertion(value){
        cy.contains(value).should("be.visible")
    }
    static reload(page){
        cy.reload(page)
    }
    static scroll(distance){
        cy.scrollTo(distance)
    }
}
export default commonCommands