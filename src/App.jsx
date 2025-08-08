import './App.css'

function App() {
  return (
    <div>
      <header className='container'>
        <img src="./Group 20.png" alt="" />

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Offers</a></li>
        </ul>
        <div className='btnbox'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <button className='btn'><i class="fa-solid fa-phone-volume"></i> Contact</button>
        </div>
      </header>
      <main className='container'>
        <section className='asd'>

          <div className='wer'>
            <h1>Dive into Delights Of <br /> Delectable <span>Food</span></h1>
            <p>Where Each Plate Weaves a Story of Culinary <br />  Mastery and Passionate Craftsmanship</p>
            <div className="btndiv">
              <button className='btn1'>Order Now</button>
              <h3>Watch Video</h3>
              <button className='btn2'><i class="fa-solid fa-play"></i></button>
            </div>

          </div>

          <img src="./kom.png" alt="" className='kom' />
          <div className='s'></div>
        </section>

        <section className='section2'>
          <h4>Customer Favorites</h4>
          <h2>Popular Categories</h2>
          <div className='cardota' >
            <div className='card'><img src="./pngwing 3.png" alt="" /><h3>Main Dish</h3><br /><p>(12 break fast)</p></div>
            <div className='card'><img src="./pngwing 4.png" alt="" /><h3>Main Dish</h3><br /><p>(12 break fast)</p></div>
            <div className='card'><img src="./pngwing 6.png" alt="" /><h3>Main Dish</h3><br /><p>(12 break fast)</p></div>
            <div className='card'><img src="./pngwing 7.png" alt="" /><h3>Main Dish</h3><br /><p>(12 break fast)</p></div>
          </div>
        </section>


        <section className='section4' >
         <h4>Special Dishes</h4>
         <h1>Standout Dishes <br/> From Our Menu</h1> 
        <div className="ota">
           <div className='card3'><img src="./salad.png" alt="" /><h2>Fattoush salad</h2> <p>Description of the item</p> </div> 
         <div className='card3'><img src="./salad.png" alt="" /><h2>Fattoush salad</h2> <p>Description of the item</p> </div> 
         <div className='card3'><img src="./salad.png" alt="" /><h2>Fattoush salad</h2> <p>Description of the item</p> </div> 
         <div className='card3'><img src="./salad.png" alt="" /><h2>Fattoush salad</h2> <p>Description of the item</p> </div> 
        </div>
        </section>
        


         <div className="mijozlar-fikri">
      <div className="chap-qism">
        <div className="chef-konteyner">
          <img
            className="chef-rasmi"
            src="./group.png"
            alt="oshpaz"
          />
          <span className="emoji bir">&#128522;</span>
          <span className="emoji ikki">&#127829;</span>
          <div className="chef-label">Eng yaxshi oshpaz 😊</div>
        </div>
      </div>

      <div className="ong-qism">
        <div className="kichik-sarlavha">Testimonials</div>
        <h2 className="asosiy-sarlavha">
          Mijozlarimiz Biz Haqimizda Nima Deydi
        </h2>
        <p className="fikr-matni">
          “Men kecha Foodi’da ovqatlandim va juda zo'r taassurot qoldi! Taomning
          ko'rinishi va xizmat darajasi juda yuqori edi.”
        </p>
        <div className="baholash-qismi">
          <div className="avatarlar">
            <img src="Mask group (1).png" alt="user1" />
            <img src="Mask group (2).png" alt="user2" />
            <img src="Mask group (3).png" alt="user3" />
          </div>
          <div lassName="baho-info">
            <strong>Mijoz Fikri</strong>
            <div className="yulduzlar">
              <span className="yulduz">&#11088;</span>
              4.9 <span className="izoh">(18.6k izohlar)</span>
            </div>
          </div>
        </div>
      </div>
    </div>



     <div className="ota-ohiri">
        <div className="left">
          <p className="o">Our Story & Services</p>
          <h2 className="c">Our Culinary Journey And Services</h2>
          <p className="r">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="btn6">Explore</button>
        </div>
        <div className="right">
          <div className="ota3">
          <div className="card">
            <img src="./m.png" alt="" className="img" />
            <p className="ca">Catering</p>
            <p className="de">
              Delight your guests with our flavors and presentation
            </p>
          </div>
          <div className="card">
            <img src="./m.png" alt="" className="img" />
            <p className="ca">Catering</p>
            <p className="de">
              Delight your guests with our flavors and presentation
            </p>
          </div>
          </div>
          <div className="ota-card">
          <div className="card">
            <img src="./m.png" alt="" className="img" />
            <p className="ca">Catering</p>
            <p className="de">
              Delight your guests with our flavors and presentation
            </p>
          </div>
          <div className="card">
            <img src="./m.png" alt="" className="img" />
            <p className="ca">Catering</p>
            <p className="de">
              Delight your guests with our flavors and presentation
            </p>
          </div>
          </div>
        </div>
      </div>
      </main>

  <footer className="footer">
      <div className="footer-container">

        <div className="footer-col logo-section">
          <h2 className="logo">FOODI</h2>
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
          <div className="social-icons">
            <span className="icon facebook"><i className="fab fa-facebook-f"></i></span>
            <span className="icon instagram"><i className="fab fa-instagram"></i></span>
            <span className="icon twitter"><i className="fab fa-twitter"></i></span>
            <span className="icon youtube"><i className="fab fa-youtube"></i></span>
          </div>
        </div>

        <div className="footer-col">
          <h3>Useful links</h3>
          <ul>
            <li><a href="#">About us</a> br</li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Main Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">Reservation</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="mailto:example@email.com">example@email.com</a></li>
            <li><a href="#">+64 958 248 966</a></li>
            <li><a href="#">Social media</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 Dscode | All rights reserved</p>
      </div>
    </footer>



      
    </div>
  )
}

export default App
