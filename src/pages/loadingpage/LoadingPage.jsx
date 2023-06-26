// import React from 'react'
// import "./LoadingPage.css"

// const LoadingPage = () => {
//   return (
//     <>
    
//     <body>
// 		<div class="loader">
// 			<span>L</span>
// 			<span>O</span>
// 			<span>A</span>
// 			<span>D</span>
// 			<span>I</span>
// 			<span>N</span>
// 			<span>G</span>
//             <br/>
//             <span>.</span>
//             <span>M</span>
//             <span>O</span>
//             <span>V</span>
			
// 		</div>
//     </body>
//     </>
//   )
// }
// export default LoadingPage;



import React, { useEffect } from 'react';
import "../loadingpage/LoadingPage"

function AutoRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // PFad zur zielseite
      window.location.href = '/LandingPage';
    }, 3000); // 3000 Millisekunden = 3 Sekunden

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div class="loader">
			<span>L</span>
			<span>O</span>
			<span>A</span>
			<span>D</span>
			<span>I</span>
			<span>N</span>
			<span>G</span>
            <br/>
            <span>.</span>
            <span>M</span>
            <span>O</span>
            <span>V</span>
			
		</div>
    </div>
  );
}

export default AutoRedirect;

