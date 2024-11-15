import { CardMedia } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CarteContext, ICarte } from "../context/carte.context";

export default function Carte(props: ICarte) {
    const [retournee, setRetournee] = useState(props.retournee);
    const {cartesRetournee, setCarteRetournee} = useContext(CarteContext);

    useEffect(() => {
        setRetournee(props.retournee);
    }, [props.retournee])

    const carteClique = () => {
        setRetournee(true);
        const nouvellesCartes = [...cartesRetournee, { id: props.id, photo: props.photo, retournee: true}];
        setCarteRetournee(nouvellesCartes)
    };

    return (
        <CardMedia image={retournee? props.photo: "dessus-carte.svg"} sx={{ height: 150, width: 150 }} onClick={() => carteClique()} />
    );
}