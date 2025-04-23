const {I} = inject();

class PlayVideo {
    constructor(){
        this.fields = {
        mainpage: "https://www.youtube.com/",
        buscar: '//input[@class="ytSearchboxComponentInput yt-searchbox-input title"]',
        cancion: "YNLPA",
        seleccionar: '//button[@class="ytSearchboxComponentSearchButton"]',
        resultado: '//img[@src="https://i.ytimg.com/vi/tm7-LlUc7uc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJ9d95pMLsM9EUesX2XULIhNld4g"]',

        };
    }

    pagprin(){
        I.amOnPage(this.fields.mainpage,5);
    }
    busqueda(){
        I.fillField(this.fields.buscar,this.fields.cancion);
        I.click(this.fields.seleccionar);
    }
    selectresult(){
        I.wait(3);
        I.click(this.fields.resultado);
    }

}

module.exports = new PlayVideo();