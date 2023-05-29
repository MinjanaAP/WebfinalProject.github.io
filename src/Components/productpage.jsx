import Navbar from './navbar';
import ProductDisc from './productDisc';
import DropDownTable from './dropDownTable'
import './stylesheet/productPage.css'
import ItemDetails from './ItemDetails';
import Help from './help'
import Motto from './motto'
import Footer from './footer'
import BackHomeButton from './backHomeButton';

const ProductPage = ()=>{

    return(
        <div className='productPages' id='ProductPages'>
            <Navbar id='Navbar' />
            <BackHomeButton/>
            <ProductDisc />
            <div className='otherProducts'>
                <div className='drop-down-table'>
                    <DropDownTable/>
                </div>
                <div className='Others'>
                    <div className='OthersTitle'>
                        <h3>Similar Products</h3>
                    </div>
                    <div className='SimilarProducts'> 
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
                </div>
            </div>
            <Help/>
            <Motto/>
            <Footer/>
        </div>
    )
}

export default ProductPage;