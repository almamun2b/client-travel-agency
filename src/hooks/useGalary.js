import { useEffect, useState } from "react";

const useGalary= ()=>{
    const [galary, setGalary] = useState([]);

    useEffect(() => {
        fetch('trip-galary.json')
            .then(res => res.json())
            .then(data => setGalary(data))
    }, []);
    
    return [galary];
}

export default useGalary;