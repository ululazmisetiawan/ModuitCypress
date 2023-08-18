describe ('Register', () => {

    let email = 'ulul111114@gmail.com'


    it('Register with valid credential', () => {
        cy.visit('https://reksa.moduit.id/idn/sign_up');
        cy.title().should('eq','moduit - Gateway to Wealth')
        cy.get('#fullname').type('Ulul Azmi Setiawan');
        cy.get('#email').type(email);
        cy.get('#password').type('Ulul123@');
        cy.get('#confirmPassword').type('Ulul123@');
        cy.get('#phone').type('83312412241');

        cy.wait(2000);
        cy.contains('button', 'Daftar').click();
        
        cy.wait(3000);
        cy.get('h1').should('have.text','Selamat Datang di Moduit');
    });


    it('Register with registered email', () => {
        cy.visit('https://reksa.moduit.id/idn/sign_up');
        cy.title().should('eq','moduit - Gateway to Wealth')
        cy.get('#fullname').type('Ulul Azmi Setiawan');
        cy.get('#email').type(email);
        cy.get('#password').type('Ulul123@');
        cy.get('#confirmPassword').type('Ulul123@');
        cy.get('#phone').type('83312412241');
        
        cy.wait(3000);
        cy.contains('Alamat email sudah terdaftar');
    });

    it('Register with confirm password doesnt match with password', () => {
        cy.visit('https://reksa.moduit.id/idn/sign_up');
        cy.title().should('eq','moduit - Gateway to Wealth')
        cy.get('#fullname').type('Ulul Azmi Setiawan');
        cy.get('#email').type(email);
        cy.get('#password').type('Ulul123@');
        cy.get('#confirmPassword').type('Ulul123@2');
        cy.get('#phone').type('83312412241');
        
        cy.wait(3000);
        cy.contains('Alamat email sudah terdaftar');
        cy.contains('Konfirmasi Kata sandi tidak sesuai');
    });

    it('Register using an incorrect password in the requirements', () => {
        cy.visit('https://reksa.moduit.id/idn/sign_up');
        cy.title().should('eq','moduit - Gateway to Wealth')
        cy.get('#fullname').type('Ulul Azmi Setiawan');
        cy.get('#email').type(email);
        cy.get('#password').type('ulul');
        
        cy.wait(3000);
        cy.get('li').should('have.length', 5);
        cy.get('li').then(($element) => {
            cy.log($element.text())
        });
    });



})