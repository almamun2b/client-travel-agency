import { useEffect, useState } from "react";

const useWorldTour= ()=>{
    const [worldTour, setWorldTour] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-eyrie-03916.herokuapp.com/world-tour')
            .then(res => res.json())
            .then(data => setWorldTour(data))
    }, []);
    
    return[worldTour];
}

export default useWorldTour;