import { useEffect, useState } from "react";

const useWorldTour= ()=>{
    const [worldTour, setWorldTour] = useState([]);

    useEffect(() => {
        fetch('world-tour.json')
            .then(res => res.json())
            .then(data => setWorldTour(data))
    }, []);
    
    return[worldTour];
}

export default useWorldTour;