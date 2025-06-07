const fs = require('fs');

module.exports = {
  fields: {
    folioOS: '#folSolKio'
  },

  async generaos(I) {
    const osA0 = this.fields.folioOS;

    await within({ frame: '//iframe[@name="kioskoA0"]' }, async () => {
      const texto = await I.grabTextFrom(osA0);
      fs.writeFileSync('OSA0.txt', texto, 'utf8');
      console.log('✅ Texto guardado desde iframe.');
    });
  }
};