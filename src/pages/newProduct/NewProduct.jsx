import { useContext, useState } from "react";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./newProduct.css";

export default function NewProduct() {
  const { dispatch } = useContext(MovieContext);
  const [movieData, setmovieData] = useState({
    title: "",
    publisher: "",
    producer: "",
    genre: "",
    age: "",
    movie: "",
    cover: "",
    thumbnail: "",
  });

  const handleoChange = (e) => {
    if (e.target.files) {
      setmovieData({ ...movieData, [e.target.name]: e.target.files[0] });
    } else {
      setmovieData({ ...movieData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", movieData.title);
    formData.append("publisher", movieData.publisher);
    formData.append("producer", movieData.producer);
    formData.append("genre", movieData.genre);
    formData.append("age", movieData.age);
    formData.append("movies", movieData.movie);
    formData.append("cover", movieData.cover);
    formData.append("thumbnail", movieData.thumbnail);
    createMovie(formData, dispatch);
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="thumbnail"
            onChange={(e) => handleoChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input
            type="file"
            id="imageTitle"
            name="cover"
            onChange={(e) => handleoChange(e)}
          />
        </div>
        {/* <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imageSmall"
            name="imageSmall"
            onChange={(e) => setImageSmall(e.target.files[0])}
          />
        </div> */}
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Django Unchained"
            name="title"
            onChange={(e) => handleoChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Publisher</label>
          <input
            type="text"
            placeholder="Django Unchained"
            name="publisher"
            onChange={(e) => handleoChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Producer</label>
          <input
            type="text"
            placeholder="Django Unchained"
            name="producer"
            onChange={(e) => handleoChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => handleoChange(e)}
          />
        </div>

        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Action"
            name="genre"
            onChange={(e) => handleoChange(e)}
          />
        </div>

        <div className="addProductItem">
          <label>Age Limit</label>
          <input
            type="text"
            placeholder="16"
            name="age"
            onChange={(e) => handleoChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="movie" onChange={(e) => handleoChange(e)} />
        </div>
      </form>
      <div className="submitButtons">
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </div>
      <div id="uploadProgress0"></div>
      <div id="uploadProgress1"></div>
      <div id="uploadProgress2"></div>
      <div id="uploadProgress3"></div>
      <div id="uploadProgress4"></div>
    </div>
  );
}
