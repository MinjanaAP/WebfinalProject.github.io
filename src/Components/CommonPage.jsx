import CommonDiv1 from './CommonDiv1'
import OurProjectInCommon from './OurProjectsInCommonPage';
import Button2 from './button2';
import Categories from './categories';
import Footer from './footer';
import Help from './help';
import Navbar from './navbar';
import './stylesheet/CommonPage.css'
import TrendsDiv from './trendsDiv';

const CommonPage = ()=>{
    const images = [
        'https://p3.aprimocdn.net/boconcept/8c7557d4-4bcf-400f-aeed-af7f00920284/brand%20ss23%20detail%2038_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg',
        'https://p3.aprimocdn.net/boconcept/78f63e4a-988a-4927-8771-ad44000796ee/1583349__WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg',
        'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://p3.aprimocdn.net/boconcept/fb1336ab-4b34-46a9-a23c-ae3000c41c04/1685500_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg',
        'https://p3.aprimocdn.net/boconcept/6d25f1be-4aa2-41bf-88f0-af7f0091d318/brand%20ss23%20detail%2022_WEB-Collage3-2Landscape-1500x897.jpg',
        'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
    return(
        <div className="CommonPage">
            <Navbar/>
            <CommonDiv1 Img ="https://p3.aprimocdn.net/boconcept/c9d58316-d416-4788-86ca-af7f0092775c/brand%20ss23%20main%2024_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg" 
            title ="Interior Design Trends 2023"
            text="Transform your space with the latest trends in interior design and home decor. Whether you're looking to make a small change to your bedroom or overhaul your entire living space, this year's leading interior design trends are sure to inspire you."
            />
            <div className='buttonsDiv'>
                <Button2 text="MODERN ORGANIC TREND" id="b1" />
                <Button2 text="BIOPHILIC DESIGN TREND"/>
                <Button2 text="JAPANDI TREND"/>
            </div>
            <OurProjectInCommon images={images} interval={3000}
             description = ' One of the characteristics of the modern organic style is the use of natural materials to create a warm and welcoming atmosphere. Achieve the perfect balance of the modern and the timeless by blending clean lines and smooth surfaces with organic materials and textures like leather, cotton and wool.'
             />
                 <TrendsDiv title="Modern meets organic"
       text = 'Organic modern design combines the simplicity and minimalism of modern design with elements of nature. The emphasis is on creating contemporary yet welcoming spaces in your home without compromising on comfort.'
       img = 'https://p3.aprimocdn.net/boconcept/877ba237-a43c-4923-bc26-af890073262b/brand%20ss23%20detail%2065_WEB-FeatureFullWidthImage-1440x810.jpg'
      buttonText = 'Explore More' 
      />
        <div className='text-common'>
            <h4>Three key elements of modern organic</h4>
            <p>The modern organic trend adds flow, movement and balance to your interiors. Look to organic colors, organic materials and organic shapes to emulate the trend in your home. </p>
        </div>
      <div className='shop-by-category'>
        
        <Categories
        ImgUrl = 'https://p3.aprimocdn.net/boconcept/4e1d4003-aead-41ee-8c48-af8000bb69e1/SS23%2028_WEB-Collage3-2Portrait-1000x1197.jpg'
        Name = 'Neutral colors'
        description= 'Soft neutral colors make up the foundation of a modern organic room. Opt for shades of white, gray and brown, then add pops of brighter colors for extra warmth. '
      
        />
           <Categories
        ImgUrl = 'https://p3.aprimocdn.net/boconcept/4ccfc8c0-26bb-417a-928f-ae8900bbe037/AW22%20161%20Vignetter_WEB-Collage3-2Portrait-1000x1197.jpg'
        Name = 'Organic materials'
        description= 'From wood and leather to ceramic and linen, the modern organic trend relies heavily on organic materials and natural textures to create a sense of comfort in the home.'
        />
           <Categories
        ImgUrl = 'https://p3.aprimocdn.net/boconcept/d35da501-528d-40ed-87be-af8000bb707d/SS23%2032_WEB-Collage3-2Portrait-1000x1197.jpg'
        Name = 'Gentle curves'
        description= 'Modern organic design uses gentle curves to create a dynamic sense of movement and flow. Consider soft silhouettes, curved furniture and rounded elements.'
        />
    </div>
    <Help/>
    <Footer/>
        </div>
    )
}

export default CommonPage;