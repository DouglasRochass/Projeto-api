import { useContext } from "react";
import Context from "../context/Context";

function Counter(){
    const [total, setTotal] = useContext(Context);
    return(
        <div>
            <h3> {total} </h3>
            <button type="button" onClick={() => setTotal(total+1)}></button>
        </div>
    )
}

export default Counter
