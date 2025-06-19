const { I } = inject();

class CrearUsuario {
  constructor() {
    this.fields = {
      inicio: "https://cloudappspre.telmex.com/AdminEvolucion/",
      inputuser: '[id="usuarioInput"]',
      user: "CCP_TEST",
      inputpasswd: '[id="passwordInput"]',
      passwd: "dr0wss4p#4",
      btnlogin: '[id="btnSubm"]',
      btnusers: '[id="tab-usuarios"]',
      btncrear: '//span[@class="glyphicon glyphicon-plus"]',

      //Datos usuario
      inputname: '[id="inputNombreUsuario"]',
      //nombre: "Juan Morales",
      inputusername: '[id="inputUsername"]',
      //usuario: "morales1994",
      inputmail: '[id="inputCorreo"]',
      //mail: "moju@globahitss.com",
      inputpass: '[id="inputPasswd"]',
      //pass: "mor41e5#5",
      inputperfil: "#selectPerfil", //'[id="selectPerfil"]'
      //perfil: '59', //'//option[text()="SUPER ADMINISTRADOR PLT"]',
      //perfil2: '59',//option[text()="pr_subordinado2"]',
      btncancel: '[id="btn-cancel"]',
      btnadd: '//button[text()="Agregar"]',
    };
  }

  inicioadmin() {
    I.amOnPage(this.fields.inicio);
    I.wait(1);
    I.fillField(this.fields.inputuser, this.fields.user);
    I.fillField(this.fields.inputpasswd, this.fields.passwd);
    I.wait(2);
    I.click(this.fields.btnlogin);
    I.wait(5);
  }

   crearuser(nombre, usuario, correo, password, perfil) {
    I.click(this.fields.btnusers);
    I.wait(1);
    I.click(this.fields.btncrear);
    I.wait(3);
    
    I.fillField(this.fields.inputname, nombre)
    I.fillField(this.fields.inputusername, usuario)
    I.fillField(this.fields.inputmail, correo)
    I.fillField(this.fields.inputpass, password)
    I.selectOption(this.fields.inputperfil, perfil.toString())
    I.wait(1)
    I.click(this.fields.btnadd)
    I.wait(5)

  }
  /*agregaruser(){
    I.click(this.fields.btnadd)
  }*/

}
module.exports = new CrearUsuario();