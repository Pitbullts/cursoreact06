
import React, { useEffect } from "react";
 import { useNavigate } from "react-router-dom";


function NotFound() {

    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {

        navigate('/home')

      }, 1000)
          // eslint-disable-next-line
    }, [])


    return (
        <div>
            <div>

                </div>
                <div className="center">
                    <h1>Por aca no es, usa los botones del NavBar y movete a una seccion que si funque.</h1>
                    <p> Muchas tenkius</p>
                    <h2> Sera redirigido al Home en los proximos segundos 5 segundos</h2>
  
                </div>
        </div>
        
    )
}
export default NotFound;