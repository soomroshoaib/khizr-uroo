import React from 'react';







function Header (){




    return(
      <React.Fragment>
        <div className="header fixed flex aic">
             <div className="book">
               <img src="https://logos-download.com/wp-content/uploads/2016/04/OLX_logo_logotype_emblem.png"  alt="shoaibsoomro"/>
             </div> 
             <div className="center rel aic">
               <div className="icon-search ico s24" />
               <input className="label s15 font" placeholder="Your location" value="Pakistan" />
               <button className="icon-chevron-down arro s24 "  />
             </div>
             <div className="search flex aic">
               <input type="text" placeholder="Find Cars, Mobile Phone and more ....." className="query font s15" />
               <button className="icon-search go s24 cfff" />
             </div>
             <div className="actions flex aic">
            
             <button className="sell flex aic">
               <div className="icon-plus ico s24" />
               <h2 className="s18 fontb">Sell</h2>
             </button>
             </div> 
        </div>

        <div className="hnav fixed flex aic">
          <button className="view-cates flex aic color">
                <h2 className="s18 font">All Categrories</h2>
                <button className="icon-chevron-down arro s24 "  />
                

          </button> 
          
           
        </div>
       
        <div className="hclr" />

       

     </React.Fragment>


    );

}



export default Header;