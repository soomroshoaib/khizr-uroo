import React, {useEffect, useState} from 'react';
import Aditem from './Aditem';

function Home (){

    const [_lift, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        if(loading){
            let _lift = [];
            for(let i = 0; i < 16; i++){
                _lift.push(<Aditem placeholder="{true}" />);
    
    
            }
            setList(_lift);
        }

    }, _lift );
    

   

    return(
        <React.Fragment>
             <div className="home-page flex">
            <div className="ad-lift flex">
               {_lift}
            </div>
            <button className="load-now fontr c333 b anim s18">
                Load more
            </button>  
        </div>
        <div className="app-ribbon flex aic">
        <div className="img">
                <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png" />
            </div>
            <div className="meta">
                <h2 className="title fontb s30 color">Try to olx app</h2>
              <h2 className="slogan font s18 color">Buy sell and find just about any think using the app and mobile</h2>
            </div>
            
       
    </div>
        </React.Fragment>
       

        


    )

}



export default Home;