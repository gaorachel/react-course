function ProfileCard({ title, handle, image, description }) {
  console.log(title, handle);
  //   // one way of destructure
  //   const title = props.title;
  //   const handle = props.handle;

  // better way of destructure
  //   const {title, handle} = props
  // and we can even not use props, but directly use {title, handle} as this function's input variables.
  const size = { width: 500, height: 700, margin: "margin is-4" };

  return (
    <div className="card" style={size}>
      <div className="card has-background-primary-light" style={size}>
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={image} alt="pda logo" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media-content">
            <p className="title is-4"> {title} </p>
            <p className="subtitle is-6"> {handle} </p>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
