import { Box } from "@chakra-ui/react";
import Seccion from "./components/Seccion"

const lista = [
  {
    id:1,
    img:"https://http2.mlstatic.com/D_Q_NP_745854-MLA48622828334_122021-AB.webp",
    precioAnt:"169.999",
    precio:"108.999",
    descuento:"25",
    cuotas:"6x $ 18.166 sin interes",
    envio:"Envio gratis",
    full:"⚡full",
    descripcion:"Smart TV Philips 7000 Series 50PUD7406/77 LED 4K 50",
    href:"https://www.mercadolibre.com.ar/smart-tv-philips-7000-series-50pud740677-led-4k-50-110v240v/p/MLA18607070#reco_item_pos=2&reco_backend=machinalis-homes-pdp-boos&reco_backend_type=function&reco_client=home_navigation-recommendations&reco_id=0f7f98d8-2f01-4858-a96f-56dcad64ceb4&c_id=/home/navigation-recommendations/element&c_element_order=3&c_uid=b793b339-138d-4ad6-a96c-472cf70814dd"
  },
  {
    id:2,
    img:"https://http2.mlstatic.com/D_Q_NP_905913-MLA49565967806_042022-AB.webp",
    precioAnt:"74.999",
    precio:"64.999",
    descuento:"13",
    cuotas:"6x $ 10.833 sin interes",
    envio:"Envio gratis",
    full:"⚡full",
    descripcion:"Celular Samsung Galaxy A22 5g 128gb + 4gb Ram 90hz Liberado",
    href:"https://articulo.mercadolibre.com.ar/MLA-1130743978-celular-samsung-galaxy-a22-5g-128gb-4gb-ram-90hz-liberado-_JM#backend=item_decorator&backend_type=function&client=history-polycard"
  },
  {
    id:3,
    img:"https://http2.mlstatic.com/D_Q_NP_691947-MLA49024787684_022022-AB.webp",
    precioAnt:"3.399",
    precio:"1929",
    descuento:"43",
    cuotas:"",
    envio:"",
    full:"⚡full",
    descripcion:"Balanza digital Femmto B01 negra, hasta 180 kg",
    href:"https://articulo.mercadolibre.com.ar/MLA-1154216485-balanza-digital-femmto-b01-negra-hasta-180-kg-_JM"
  },
  {
    id:4,
    img:"https://http2.mlstatic.com/D_Q_NP_820459-MLA51840070633_102022-AB.webp",
    precioAnt:"270.931",
    precio:"58.430",
    descuento:"78",
    cuotas:"6x $ 9.738 sin interes",
    envio:"Envio gratis",
    full:"",
    descripcion:"Sommier Y Colchon 2 Plazas (140x190) Telgo Prana Resortes",
    href:"https://www.mercadolibre.com.ar/sommier-y-colchon-2-plazas-140x190-telgo-prana-resortes/p/MLA19625020?pdp_filters=item_id:MLA1175817147"
  },
  {
    id:5,
    img:"https://http2.mlstatic.com/D_Q_NP_713481-MLA52166112245_102022-AB.webp",
    precioAnt:"80.000",
    precio:"57.600",
    descuento:"28",
    cuotas:"" ,
    envio:"Envio gratis",
    full:"",
    descripcion:"Notebook E-max 256 Intel Celeron N3350 6gb De Ram",
    href:"https://www.mercadolibre.com.ar/notebook-e-max-256-intel-celeron-n3350-6gb-de-ram-ddr3-320gb-de-ssd-141-1920-px-x-1080-px-intel-graphics-hd-500/p/MLA19748590?pdp_filters=item_id:MLA1217303304"
  },
]

function App() {

  return (
    <Box>
      <Seccion lista={lista} />
    </Box>
  );
}

export default App;