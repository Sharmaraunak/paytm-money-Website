import React from 'react'
import '../tables.scss'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';

 const  Options = ({name,size,addIcon}) =>{

    return (
        <div className="main">
            <div className="right">
            <FormControlLabel
             control={<Checkbox name="checkedC" />} 
             label={<span>
                 <span>
                     {name}
                 </span>
                 <span className="text-muted">{size}</span>
             </span>} />
             
            </div>
           
             {addIcon === "true"?<AddIcon 
             fontSize="large"
             />:null}
             
        </div>
    )
}

export default Options;
