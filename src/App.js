import './App.css';
import Reviews from './Reviews';
import propTypes from 'prop-types';

function App() {
  return (
    <div className="Container">
      <div className="ProductWrapper">
        <ProductImage />
        <ProductDesc label="Sneaker" title="Pinky Swagg" isDiscount="yes" />
      </div>
      <Reviews />
    </div>
  );
}

function ProductImage() {
  return (
    <div className="ProductImage">
      <img src="../img/sneakers-pink.webp" />
    </div>
  );
}

function ProductDesc(props) {
  const {label, title, isDiscount} = props;
  const benefits = ["Bahan halus", "Tahan air", "Tahan banting"];
  const listBenefits = benefits.map((itemBenefit) => 
    <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div className="ProductDesc">
      <p className="Label">{label}</p>
      <h1 className="Title">{title}</h1>
      <p className="Price">IDR 2.800.000</p>
      <CheckDiscount isDiscount={isDiscount} discount={70} />
      <p className="Info">
        One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
      </p>
      <ul>
        {listBenefits}
      </ul>
      <a href="#" onClick={(e) => AddProductToCart(title, e)}>Add to Cart</a>
    </div>
  );
}

function CheckDiscount(props) {
  const {isDiscount, discount} = props;
  if(isDiscount == "yes") {
    return (
      <p>Diskon {discount}%</p>
    );
  }
  else if(isDiscount == "coming") {
    return (
      <p>Akan ada diskon ...</p>
    );
  }
  else {
    return (
      <p>Belum ada diskon ...</p>
    );
  }
}

CheckDiscount.propTypes = {
  discount: propTypes.number.isRequired
};


function AddProductToCart(e) {
  console.log("Membeli produk " + e);
}

export default App;