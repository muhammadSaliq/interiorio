import React, { useEffect } from 'react';


const Reviews = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <div>

<div className='mb-6'>

<div class="elfsight-app-202fc3b5-10f7-4422-aa76-21727e037f91" data-elfsight-app-lazy></div>

        </div>
    </div>
  )
}

export default Reviews