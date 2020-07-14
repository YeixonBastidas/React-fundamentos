import React from 'react';

const Image = () => {
    
    const styles = {
        width: 400,
        margin: '1em auto'
    }
    return (
        <div style={styles}>
            <img 
                src='https://render.fineartamerica.com/images/rendered/search/canvas-print/6/8/mirror/break/images/artworkimages/medium/1/all-you-need-is-love-balazs-solti-canvas-print.jpg' 
                alt='Iamgen Increible'
                width='100%'
                />
        </div>
    );
   
}

export default Image;