import '../Icons.css';
import React from 'react';

const Favorite = (props) => {

  let onSave;

  if (props.active == "Favorite") {
      onSave=props.handleFavorite
  }

  return (
    <div onClick={onSave} className='NavBarElement'>
      <svg
        width="16"
        height="20"
        viewBox="0 0 18 23"
        fill="none"
      >
        <path
        className={props.active === "Favorites" ? "NavBarIcon-active" : "NavBarIcon" }
          d="M5.67515 5.34346H12.8822M15.2812 1.28946H3.43315C2.96581 1.28852 2.51622 1.46838 2.17848 1.7914C1.84074 2.11441 1.64103 2.55555 1.62115 3.02246V20.5495C1.61528 20.8265 1.69527 21.0986 1.85015 21.3285C1.9321 21.4466 2.04156 21.543 2.16909 21.6094C2.29662 21.6758 2.43838 21.7101 2.58215 21.7095C2.89494 21.6946 3.19228 21.5692 3.42115 21.3555L8.72115 16.8555C8.90527 16.7127 9.13165 16.6352 9.36465 16.6352C9.59765 16.6352 9.82404 16.7127 10.0082 16.8555L15.2912 21.3555C15.5127 21.5688 15.8039 21.6949 16.1112 21.7105C16.5762 21.7105 17.0292 21.3515 17.0292 20.5505V3.02246C17.0242 2.5618 16.8379 2.12163 16.5108 1.79728C16.1836 1.47293 15.7418 1.29049 15.2812 1.28946Z"
        />
      </svg>
      {props.active === "Favorites" ? <h5 className="NavBarText">Favorites</h5> : ""}
    </div>
  );
};

export default Favorite;
