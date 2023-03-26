import React from "react";

function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small_s3} />
    </div>
  );
}
export default ImageShow;
