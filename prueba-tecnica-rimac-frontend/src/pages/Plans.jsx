import { useEffect, useState } from "react";
import PlansService from "../services/PlansService";

export default function User() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fnListarPlans();
    },[]);

    const fnListarPlans = () => {
        PlansService.listarPlans().then(response =>{
            setPlans(response.list);
        }).catch(e =>{
            console.dir(e);
        });
    }

    return (
        <div className="container d-flex justify-content-center align-items-center mt-2">
            <div className="row">
                {plans.map((plan, index) => (
                    <div key={index} className="col-md-4 mb-4">
                         <div className="card shadow-sm border rounded">
                            <div className="card-body">
                                <h5 className="card-title">{plan.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Precio (S/):{plan.price}</h6>
                                <ul className="list-unstyled">
                                    {plan.description.map((desc, index) => (
                                        <li key={index}>{index + 1}. {desc}</li>
                                    ))}
                                </ul>
                                <p className="card-text">Edad: {plan.age}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}