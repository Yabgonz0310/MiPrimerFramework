const { I } = inject();
const xlsx = require('xlsx');
const path = require('path');

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
      inputusername: '[id="inputUsername"]',
      inputmail: '[id="inputCorreo"]',
      inputpass: '[id="inputPasswd"]',
      inputperfil: "#selectPerfil", 
      btncancel: '[id="btn-cancel"]',
      btnadd: '//button[text()="Agregar"]',
      //usuarioExiste: '[id="usuario.errors"]',
      usuarioExiste: '//span[text()="El usuario ya existe."]',
      //UsuarioOK
      usuarioOK: '//div//p[text()="El usuario se ha creado exitosamente"]',

      //Datos para la creación de usuarios desde Excel
      contExcel: 1,
      archivo: '../data/usuarios.xlsx',
      hojaU: 'Hoja1',
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
  
  seccionusuarios(){
    I.click(this.fields.btnusers);
    I.wait(1);
    I.click(this.fields.btncrear);
    I.wait(3);
  }
   async crearuser(nombre, usuario, correo, password, perfil) {
    
    const rutaUsuarios = path.join(__dirname, this.fields.archivo);
    const libro = xlsx.readFile(rutaUsuarios);
    const hoja = libro.Sheets[this.fields.hojaU];
    const datos = xlsx.utils.sheet_to_json(libro.Sheets[this.fields.hojaU]);

    //Agregar titulo de nueva columna
    xlsx.utils.sheet_add_aoa(hoja, [['RESULTADO']], {origin: 'F'+this.fields.contExcel});

    //Valida por cada registro del archivo
    for (const dato of datos) {
      this.fields.contExcel++
      if (dato.nombre && dato.usuario && dato.correo && dato.password && dato.perfil) {
       I.fillField(this.fields.inputname, dato.nombre);
       I.fillField(this.fields.inputusername, dato.usuario);
       I.fillField(this.fields.inputmail, dato.correo);
       I.fillField(this.fields.inputpass, dato.password);
       I.selectOption(this.fields.inputperfil, dato.perfil.toString())
       I.wait(1);
       I.click(this.fields.btnadd)
       I.wait(5);

       if (await I.seeElement(this.fields.usuarioOK)){
          I.wait(5)
          this.seccionusuarios();
        }
       else if (await I.seeElement(this.fields.usuarioExiste)){
          //REGISTRO CON DATOS DE USUARIO EXISTENTE - Modificar campo
          xlsx.utils.sheet_add_aoa(hoja, [['Usuario existente']], {origin: 'F'+this.fields.contExcel});
        }
      /*    
      try {
      await I.waitForElement(this.fields.usuarioOK, 6);
      //await this.seccionusuarios();
      }
      catch {
      try {
      await I.waitForElement(this.fields.usuarioExiste, 5);
      xlsx.utils.sheet_add_aoa(hoja, [['Usuario existente']], {origin: 'F'+this.fields.contExcel});
      }
      catch {
        //await this.seccionusuarios();
        
      }
      } */

      //Aquí cierra el if inicial donde se evalua si los campos tienen valores
      }
      else {
        //REGISTRO CON DATOS INCOMPLETOS - Modificar campo
        xlsx.utils.sheet_add_aoa(hoja, [['Datos incompletos']], {origin: 'F'+this.fields.contExcel});
      }
      //Volver a ingresar al apartado para borrar etiqueta de error
       this.seccionusuarios();
    }
    //Guardar cambios desdepues de pasar por todos los registros
    xlsx.writeFile(libro, rutaUsuarios, { bookType: 'xlsx', type: 'file' })
  }
 
}
module.exports = new CrearUsuario();