import PlayVideo from '../pages/searchMusic.js';
const { I } = inject();

Given("Estoy logueado en pagina principal", () => {
  PlayVideo.pagprin();
});

When("Escribo el nombre de la cancion", () => {
   PlayVideo.busqueda();
});

When("Selecciono el resultado de la busqueda", () => {
 PlayVideo.selectresult();
});

Then("Se visualiza el video", () => {
  I.wait(60);
  });
