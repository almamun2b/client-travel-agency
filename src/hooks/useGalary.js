import { useEffect, useState } from "react";

const useGalary= ()=>{
    const [galary, setGalary] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-eyrie-03916.herokuapp.com/galary')
            .then(res => res.json())
            .then(data => setGalary(data))
    }, []);
    
    return [galary];
}

export default useGalary;