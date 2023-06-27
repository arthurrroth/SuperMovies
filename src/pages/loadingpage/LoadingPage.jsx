import { AppContext } from '../../assets/Context';
import './LoadingPage.css';
import { useContext, useEffect } from 'react';


const LoadingPage = () => {

  const {setLoading} = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/landing';
    }, 3000);
    setLoading(false);
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