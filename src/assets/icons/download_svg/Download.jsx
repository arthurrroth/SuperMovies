import '../Icons.css';
import React from 'react';

const Download = (props) => {

  let onSave;

  if (props.active == "Preview") { 
      onSave=props.handleDownload
     }

  return (
    <div onClick={onSave} className='NavBarElement'>
    <svg 
      width="18" 
      height="22" 
      viewBox="0 0 27 31" 
      fill="none">

    <path  className={props.active === "Downloads" ? "NavBarIcon-active" : props.active == "Preview" ? "PreviewIcon" : "NavBarIcon" } d="M21.7238 11.125H18.875V2.16667C18.875 1.18125 18.0688 0.375 17.0833 0.375H9.91668C8.93126 0.375 8.12501 1.18125 8.12501 2.16667V11.125H5.27626C3.68168 11.125 2.87543 13.06 4.00418 14.1888L12.2279 22.4125C12.9267 23.1113 14.0554 23.1113 14.7542 22.4125L22.9779 14.1888C24.1067 13.06 23.3183 11.125 21.7238 11.125ZM0.958344 29.0417C0.958344 30.0271 1.76459 30.8333 2.75001 30.8333H24.25C25.2354 30.8333 26.0417 30.0271 26.0417 29.0417C26.0417 28.0563 25.2354 27.25 24.25 27.25H2.75001C1.76459 27.25 0.958344 28.0563 0.958344 29.0417Z"/>
    </svg>
    {props.active === "Downloads" ? <h5 className="NavBarText">Downloads</h5> : ""}
    </div>

  );
};

export default Download;
