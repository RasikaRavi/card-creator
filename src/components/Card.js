import React, { useState } from 'react';

function Card(){

    const [card, setCard] = useState({
        name: '',
        email: '',
        contact: '',
        url: ''
      })
      const [Data, updateData] = React.useState([]);

     const handleChange = event => {
        setCard({...card,[event.target.name]:event.target.value}) 
     }

    const handleSubmit= event=>{
        event.preventDefault()
        Data.push({
            newName: card.name,
            newEmail:card.email,
            newContact: card.contact,
            newUrl:card.url
          })
          updateData([...Data])
        console.log(Data)
    }
    const handleDelete=(id)=>{
        var list=Data;
        list.splice(id,1)
        updateData([...list]);
    }
   
      return(
        <div className='cont'>
            <div className='box1'>
            <h1> Card Creator </h1> 
                <div className='boxin1'>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label> Please Enter your name:</label><br/>
                    <input type='text' size="50" name='name' onChange={handleChange}/>
                </div>
                <div>
                    <lable> Please Enter your email:</lable><br/>
                    <input type='text' size="50" name='email' onChange={handleChange}/>
                </div>
                <div>
                    <lable> Enter your contact number:</lable><br/>
                    <input type='text' size="50"name='contact' onChange={handleChange}/>
                </div>
                <div>
                    <lable> Paste your profile picture URL:</lable><br/>
                    <input type='text' size="50"name='url' onChange={handleChange}/>
                </div>
                <br/><button className="submit-btn" onClick={handleSubmit}> Create Card </button>
            </form>
            <div>
             {Data.map((data,id) => {return(
                        <div className="card_div" key={id}>
                        <img src={data.newUrl} alt="picture"/><br/>
                        <lable> Name:  {data.newName}</lable><br/>
                        <lable> Email:  {data.newEmail}</lable><br/>
                        <lable> Contact Number:  {data.newContact}</lable><br/>
                       
                        <button className="del_btn" onClick={()=>handleDelete(id)}> Delete </button>
                        </div>
                      )})} 
            </div>
            
            </div>
            </div>
            </div>

      )

}
export default Card;