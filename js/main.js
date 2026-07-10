// Botão voltar ao topo

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Botão do Whatsapp

function openWhatsApp() {
  const phoneNumber = '5531994466868';
  const message = 'Olá, vim através do seu Portifólio!';
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


//PDF floricultura
function irParaFloricultura() {
  window.open("https://1drv.ms/b/c/9391a66519515486/EShiLy9sHCBNhRUoS1rgd8gBh5p1kCIW9EaznUOuMwcb-A?e=wUjPUP")

}

//PDF sekib
function irParaSEKIB() {
  window.open("https://1drv.ms/b/c/9391a66519515486/EeaSiFxj-KRGgPllsYq1wcwBT1GQ3IxBZhhwIRloYK-d_g?e=szvUDy")

}

// Site Dr. Rozana

function irParaDrRozana() {
  window.open("https://landing-page-dr-rozana.vercel.app/")
}

// Aplicativo Gooday

function irParaGooday() {
  window.open("https://www.figma.com/proto/0LldkORNZ9BE2HPnRIxSXA/Curso-Pro-Figma---App-Gooday?node-id=77-63&t=6TWlRwN8R9uq0Fxl-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A35&show-proto-sidebar=1")
}


//Carrocel 

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true
});
