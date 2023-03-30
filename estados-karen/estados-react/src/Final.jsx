import React, { useState } from "react";
import './Final.css'

function Final() {
    const [curso, setCurso] = useState('Curso de React Js');
    const [software, setSoftware] = useState('Software:Visual Studio Code');
    const [description, setDescription] = useState('Un curso rapido sobre las bases de React');
    const [image, setImage] = useState('./public/images/juego.PNG');

    const changeCourse = (e) => {

        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setCurso(valueInput)
        
        e.target.previousSibling.value = '';
      }

      const changeSoftware = (e) => {

        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setSoftware(valueInput)
        
        e.target.previousSibling.value = '';
      }
      
      const changeDescription = (e) => {

        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setDescription(valueInput)
        
        e.target.previousSibling.value = '';
      }

      const changeImage = (e) => {

        e.preventDefault();
        const valueInput = e.target.src;
        setImage(valueInput)
        
      }


    return (
        <div className="curso">
            <div className="container-fluid">
                <div className="row vh-500">
                    <div className="col-12 col-lg-6 d-flex justify-content-start align-items-center text-white" style={{background: `url(${image}) center/cover`}}>
                        <div className="c1">
                            <h1 className="h1">
                            {curso}
                            </h1>
                            <h5>
                            {software}
                            </h5>
                            <p>{description}</p>
                            <button className="boton1" href="">¡INSCRIBETE!</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <input type="email" className="b1 form-control pad" id="exampleFormControlInput1" placeholder="Nombre del curso" />
                            <button className="my-2" onClick={changeCourse}>
                                Actualizar
                            </button>
                         
                            <input type="email" className="b1 form-control pad" id="exampleFormControlInput1" placeholder="Software" />
                            <button className="my-2" onClick={changeSoftware}>
                                Actualizar
                            </button>
                        
                            <textarea className="b1 form-control pad" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                            <button className="my-2" onClick={changeDescription}>
                                Actualizar
                            </button>
                        
                        <div onClick={changeImage} >
                            <h3>Nueva imagen:</h3>
                        <img src='./public/images/K6Rz.gif'className= 'mx-1' width="70" height="50" alt=''/>
                        <img src='./public/images/car.jpg' className= 'mx-1' width="70" height="50" alt=''/>
                        <img src='./public/images/code.jpg'className= 'mx-1' width="70" height="50" alt=''/>
                        <img src='./public/images/film.jpg'className= 'mx-1' width="70" height="50" alt=''/>
                        
                        </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>

    )
}

export default Final 
