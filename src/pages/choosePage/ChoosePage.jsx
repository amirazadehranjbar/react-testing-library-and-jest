// src/pages/choosePage/ChoosePage.jsx
import {useNavigate} from "react-router";

function ChoosePage() {

    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 gap-x-3 gap-y-2 m-3">

            <button className="button" onClick={()=>navigate("/users")}>user</button>
            <button className="button" onClick={()=>navigate("/products")}>products</button>

        </div>
    )
}

export default ChoosePage
