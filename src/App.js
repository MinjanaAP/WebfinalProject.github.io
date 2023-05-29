import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import video from './Resources/archiweb.MP4'
import AboutUs from './Components/aboutus';
import TrendsDiv from './Components/trendsDiv';
import Categories from './Components/categories';
import OurProject from './Components/ourproject';
import image1 from './Resources/back1.jpg'
import image2 from './Resources/back2.jpg'
import BackHomeButton from './Components/backHomeButton';
import Help from './Components/help';
import Motto from './Components/motto';
import Footer from './Components/footer';
import { useNavigate } from 'react-router-dom';
import ItemDetails from './Components/ItemDetails';


function App() {
  // todo {data.map((item)=>{
      
  // })}
  const navigate = useNavigate();
  const images = [
    'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ]
  return (
    <div className="App">
      <Navbar />
      <BackHomeButton />
      <div className="container">
        <div className='box-left'>
         {/* <img src={home_img} alt='background' /> */}
        </div>
        <div className='box-right'>
        <div className='box-right-topic1'>
          <h1>Modern Interior</h1>
            <div className='box-right-topic2'>
            <h1>Design Studio.</h1>
            </div>
          </div>
          
          <div className='box-right-description'>
            <p>Make the most of compact spaces with space saving furniture that are ingenuous and innovative. Transform your living space with interior design.</p>
            <input type='button' value='Explore more' id='explore_btn' className='explore_btn'
            onClick={()=>{
              // navigate('ProductPage');
            }}
            />
          </div>
        </div>
      
      </div>
      <div className='video'>
        <video src={video} autoPlay loop muted id='videoId'
       
        />
      </div>
      <AboutUs  />
      <TrendsDiv title="Interior Design Trends for 2023"
       text = 'Learn about the top interior decorating trends for 2023 and be motivated to build a place that expresses your unique individuality.'
       img = 'https://p3.aprimocdn.net/boconcept/4f93623d-6dcb-4a8e-a0d7-af7f00ae255b/brand%20ss23%20detail%2069_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg'
      buttonText = 'Explore Trends'
     />
      <div className='shop-by-category-heading'>
      <h1>Shop by Category</h1>
      </div>
      
      <div className='shop-by-category'>
        
      <Categories
      ImgUrl = 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      Name = 'Sofa'
    
      />
         <Categories
      ImgUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNy8nLHAwvPHRlbGiNLdxZV22VyLlr6Xd8oiNlkvDwCWMmeV6_'
      Name = 'Chair'
      />
         <Categories
      ImgUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbjZ9NvNBE6H_qEevAf4_2k30HNqKI3OS9ZZFzbW_KNNArupwU'
      Name = 'Tables'
      />
         <Categories
      ImgUrl = 'https://p3.aprimocdn.net/boconcept/84506db0-dc09-4650-8b09-ae8900bbea9a/AW22%20172%20Vignetter_WEB-Headline4Images-350x430.jpg'
      Name = 'Arm Chairs'
      />
         <Categories
      ImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO6TYzSjuItYHcfkjgxTQx0FY5ICQPO--t4u1xdXOY9s5KQ8e'
      Name = 'Storages'
      />
          <Categories
      ImgUrl = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReyEm-VvaU5rR53fwFtV2B4iu4LUSqeRZxdQp4WavEdHCn_CVf'
      Name = 'Beds'
      />
          <Categories
      ImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xn9QGM6n1W2QxLs-O88kBCWw4-EVdQWHbIN0p7cuXue3cro7'
      Name = 'Outdoor and Garden furniture'
      />
          <Categories
      ImgUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTm250GUZM53IvwTzwdpAl4bfxxlJ9CxyP6-EX4vd1tRndrkTot'
      Name = 'Lamps'
      />
          <Categories
      ImgUrl = 'https://p3.aprimocdn.net/boconcept/3941b491-2285-407d-9018-ae50007ed011/1029984_WEB-Headline4Images-350x430.jpg?disable=upscale&width=350&height=430'
      Name = 'Rugs'
      />
          <Categories
      ImgUrl = 'https://media.benjaminmoore.com/WebServices/prod/cdp/1920x2400/neutral-paint-211-windy-city-CSP-150-rgb.jpg'
      Name = 'Accessories'
      />
      </div>
      <OurProject images={images} interval={3000} />
      <div className='shop-by-category-heading'>
      <h1>Best Sellers</h1>
      </div>
      <div className='bestSeller'>
      <ItemDetails 
                        name = 'Bergamo sofa with round lounging unit,right '
                        description= "Brown, Leather, Lacquered"
                        price = "$14,790.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw07dbf050/images/1700000/1704284.jpg?sw=1200"
                        quantity= '12'
                        />
                        <ItemDetails 
                        name = 'Hauge dining chair  '
                        description= "Beige, Gray, Fabric, Plastic "
                        price = "$820.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcff5d745/images/2020000/2021585.jpg?sw=1200"
                        quantity= '22'
                        />
                        <ItemDetails 
                        name = 'Fiorentina dining table with supplementary tabletop  '
                        description= "Fiorentina dining table with supplementary tabletop "
                        price = "$6,199.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5742ae13/images/1640000/1640373.jpg?sw=1200"
                        quantity= '9'
                        />
                        <ItemDetails 
                        name = 'Imola chair  '
                        description= "Brown, Leather, Steel"
                        price = "$7,499.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe7c7a769/images/330000/332021.jpg?sw=1200"
                        quantity= '11'
                        />
                        <ItemDetails 
                        name = 'Como bookcase  '
                        description= "White, Lacquered"
                        price = "$1,329.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw17f64f21/images/20000/23140.jpg?sw=1200"
                        quantity= '15'
                        />
                        <ItemDetails 
                        name = '  Lugano storage bed with lift-up frame and slats, excl. mattress'
                        description= "Beige, Gray, Fabric, Lacquered  "
                        price = "$3,339.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwca6f1312/images/2040000/2047836.jpg?sw=1200"
                        quantity= '6'
                        />
                       <ItemDetails 
                        name = 'Main floor lamp'
                        description= "Yellow, Metal"
                        price = "$1,059.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3e5e6573/images/360000/369366.jpg?sw=1200"
                        quantity= '13'
                        />
                         <ItemDetails 
                        name = 'Spiral vase'
                        description= "Yellow, Stone"
                        price = "$129.00"
                        ImgUrl= "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5c15e154/images/2010000/2014111.jpg?sw=1200"
                        quantity= '17'
                        />
      </div>
      <Help />
      <Motto />
      <Footer />

    </div>
  );
}

export default App;
