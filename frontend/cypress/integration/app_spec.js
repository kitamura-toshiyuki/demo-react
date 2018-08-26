describe("Django REST framework / React quickstart app", () => {
    const lead = {
        name: "Armin",
        email: "some-email@gmail.com",
        message: "I am looking for a React tutor"
    };

    before(() => {
        cy.exec("yarn run dev");
        cy.exec("yarn run flush");
    });

    it("should be able to fill a web form", () => {
        cy.visit("/");

        cy
            .get('input[name="name"]')
            .type(lead.name)
            .should("have.value", lead.name);

        cy
            .get('input[name="email"]')
            .type(lead.email)
            .should("have.value", lead.email);

        cy
            .get('textarea[name="message"]')
            .type(lead.message)
            .should("have.value", lead.message);

        cy.get("form").submit();
    });

    it("should be able to see the table", () => {
        cy.visit("/");
        cy.get("tr").contains(`${lead.name}${lead.email}${lead.message}`);
    });
});
