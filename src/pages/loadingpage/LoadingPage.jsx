import './LoadingPage.css';
import { useEffect } from 'react';


const LoadingPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/landing';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='loading-body'>
    <div class="loader">
			<span>.</span>
			<span>M</span>
			<span>O</span>
			<span>V</span>
		</div>
    </div>
  )
}

export default LoadingPage