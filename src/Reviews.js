import './App.css';

function Reviews() {
  const users = [
    {
      "id": 1,
      "image": "img/github.jpg",
      "name": "Calvin Nadeak",
      "review": "Harga terjangkau tapi kualitas bukan kaleng-kaleng, kerenlah pokoknya!"
    },
    {
      "id": 2,
      "image": "img/avatar-01.png",
      "name": "Faisal L",
      "review": "Bahannya halus, nyaman dipakai saat olahraga. Kalau boleh ngasih rating, saya kasih nilai 9/10 ya."
    },
    {
      "id": 3,
      "image": "img/avatar-02.png",
      "name": "Ananda Dwi",
      "review": "Ini mah oke banget style-nya. Buat jalan-jalan oke, buat ke kantor pun gass kan aja."
    }
  ];
  const listReview = users.map((itemReview) => 
    <div className="Item" key={itemReview.id}>
      <img src={itemReview.image} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return (
    <div className="ReviewBox">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;