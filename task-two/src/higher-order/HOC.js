import React, { useState } from 'react'

function updatedComponent(OriginalComponent) {
 

    function NewComponent (){
        const [money , setMoney] = useState(0)

        const handleIncrease = ()=>{
            setMoney(money+2) ; 
        };
        return <OriginalComponent handleIncrease={handleIncrease} money={money} />
    }
return NewComponent ;
}

export default updatedComponent
