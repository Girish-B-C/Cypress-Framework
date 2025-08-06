

beforeEach(function()  {

     cy.fixture('amazon.json').then((data) => {
        this.data = data;
     })
});
