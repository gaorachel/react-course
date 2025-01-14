import React from "react";
import ImageShow from "./ImageShow";
import "./Image.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    console.log(image.urls.small_s3);
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list"> {renderedImages} </div>;
}

export default ImageList;
