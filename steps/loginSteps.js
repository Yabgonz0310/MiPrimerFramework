const { I } = inject();

Given("Estoy en la pagina principal", () => {
  I.amOnPage("https://www.inmotionhosting.com/");
  I.wait(5);
});

When("Voy a la pagina de login", () => {
 // I.waitForElement('//a[text()="Login"]', 2);
 I.waitForElement('//a[@aria-label="Login"]',2);
  I.click('//a[text()="Login"]');
});

When("Escribo nombre de usuario y contrasena", () => {
  I.wait(5);
  I.fillField('//input [@placeholder="email address"]', "yabingonzaga0310@gmail.com");
  I.fillField('//input [@placeholder="password"]', "Ejemplo0920#");
  I.wait(2)
});

Then("Se visualiza link de ayuda", () => {
  I.seeElement('//a[text()="Need help logging in?"]', 10);
});

