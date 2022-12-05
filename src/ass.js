import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import './App.css'

export  function Ass(){
    const [tablelist,setTablelist]=useState([]);

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products?limit=20%C2%A0')
      .then(response=>response.json())
      .then(json=>setTablelist(json))
    });
  
    return(
        <>
            <div className='container'>
                 <div className='table-responsive'>
                    {
                        tablelist.map((value,index)=>(

                            <table className='container table table-border table-over'>
                                <tbody>
                                    <thead>
                                        <tr>
                                        
                                        <th> Image</th>
                                        <th> name</th>
                                        <th>description</th>
                                        <th> rating</th>
                                        <th> category</th>
                                        <th> count</th>
                                        </tr>
                                        
                                        <tr>
                                            <td><img className="img" src={value.image} alt="sample"/></td>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.rating}</td>
                                            <td>{value.category}</td>
                                            
                                        </tr>
                                        
                                    </thead>
                                </tbody>
                            </table>
                            
                        ))
                    }
                </div>
        </div>    


    

        </>
    );
}

//  tablelist.map((value,index)=>());