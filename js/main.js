
// Botão do Whatsapp

function openWhatsApp() {
    const phoneNumber = '5531994466868'; 
    const message = 'Olá, vim através do seu Portifólio!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


//PDF floricultura
function irParaFloricultura(){
    window.open("file:///C:/Users/taina/OneDrive/Documentos/Portfolio-main/docs/Floricultura-Online.pdf")

}

//PDF sekib
function irParaSEKIB(){
    window.open("file:///C:/Users/taina/OneDrive/Documentos/Portfolio-main/docs/SEKIB.pdf")

}

// Site Dr. Rozana

function irParaDrRozana(){
  window.open("https://landing-page-dr-rozana.vercel.app/#sobre")
}

// Aplicativo Gooday

function irParaGooday(){
  window.open("https://www.figma.com/design/0LldkORNZ9BE2HPnRIxSXA/Curso-Pro-Figma?node-id=75-35&t=P0azcSLCfTnPkBhm-1")
}


//Carrocel 

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
