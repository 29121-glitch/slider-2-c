import { useState } from 'react'
import './App.css'
import Carmy from './assets/macbook.jpg'
import Cjoa from './assets/tablet samsung.webp'
import Curs from './assets/tablet xiaomi.webp'
import Slider1 from './assets/slider 1.jpg'
import Slider2 from './assets/slider 2.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={Slider1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide><img src={Slider1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Slider 2} alt="" /></SwiperSlide>
      
    </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Tablet Samsung</h2>
              <p className="desc">Tablet Samsung Galaxy Tab S9 256gb 12gb Ram Tela 11 Polegadas Cor Grafite</p>
              <p className="preco">R$ 6.499</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">MacBook </h2>
              <p className="desc">Apple 2025 MacBook Air (de 13 polegadas, Processador M4 da Apple com CPU 10‑core e GPU 8‑core, 16GB Memória unificada, 256 GB) - Luz das estrelas</p>
              <p className="preco">R$ 10.599</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 7%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Tablet Xiaomi</h2>
              <p className="desc">Tablet Xiaomi Redmi Pad Se 256 / 8 Ram Purple Roxo Cor Lavanda</p>
              <p className="preco">R$ 1.233</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

        
        <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0” frameborder="allow="autoplay; fullscreen"></iframe>
        
         


        </section>
        <footer>

         <img src="" alt="" className="logo-footer" />

         <div className="social-icons">
          <div className="icon">
            <img src="" alt="" id="instagram" />
          </div>
          <div className="icon">
          <img src="" alt="" id="youtube" />
          </div>
          <div className="icon">
          <img src="" alt="" id="tiktok" />
            </div>/div
          <div className="icon">
          <img src="" alt="" id="x" />
          </div>
         </div>


        </footer>
      </main>
    </>
  )
}

export default App
