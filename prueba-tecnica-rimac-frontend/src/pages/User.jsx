import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import icono from "../assets/user.png";

export default function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fnObtenerUser();
    },[]);

    const fnObtenerUser = () => {
        UserService.listarUser().then(response =>{
            setUser(response);
        }).catch(e =>{
            console.dir(e);
        });
    }
    return (
        <>
      
      <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card text-center">
                <img src={icono} alt="Usuario" className="card-img-top img-card mx-auto" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{user?.name}</h5>
                    <ul className="list-unstyled text-left">
                        <li>
                            <span>
                                <i className="fa fa-user"></i> Nombre Completo : {user?.lastName}
                            </span>
                        </li>
                        <li>
                            <span>
                                <i className="fa fa-calendar"></i> Cumpleaños : {user?.birthDay}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}