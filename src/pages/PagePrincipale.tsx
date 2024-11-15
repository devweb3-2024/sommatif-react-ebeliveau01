import { Button, Grid2 } from "@mui/material"
import Carte from "../components/Carte";
import { useContext, useEffect, useState } from "react";
import { CarteContext, cartesRetourneeVide, ICarte } from "../context/carte.context";

export default function PagePrincpale() {
  const { cartesRetournee, nbrEssaisRestant, setCarteRetournee, setNbrEssaisRestant } = useContext(CarteContext);
  const [reussi, setReussi] = useState(false);
  const [message, setMessage] = useState("");


  let cartesChoisies: ICarte[] = [
    { id: -1, photo: "/chat1.png", retournee: false},
    { id: -1, photo: "/chat2.png", retournee: false},
    { id: -1, photo: "/chat3.png", retournee: false},
    { id: -1, photo: "/chat4.png", retournee: false},
    { id: -1, photo: "/chat5.png", retournee: false},
    { id: -1, photo: "/chat6.png", retournee: false},
    { id: -1, photo: "/chat7.png", retournee: false},
    { id: -1, photo: "/chat8.png", retournee: false},
    { id: -1, photo: "/chat1.png", retournee: false},
    { id: -1, photo: "/chat2.png", retournee: false},
    { id: -1, photo: "/chat3.png", retournee: false},
    { id: -1, photo: "/chat4.png", retournee: false},
    { id: -1, photo: "/chat5.png", retournee: false},
    { id: -1, photo: "/chat6.png", retournee: false},
    { id: -1, photo: "/chat7.png", retournee: false},
    { id: -1, photo: "/chat8.png", retournee: false}
  ];

  const validerCartes = () => {
    if (cartesRetournee[0].photo == cartesRetournee[1].photo)
      setCarteRetournee(cartesRetourneeVide);
    else {
      setTimeout(() => {
        cartesChoisies[cartesRetournee[0].id].retournee = false;
        cartesChoisies[cartesRetournee[1].id].retournee = false;
        setCarteRetournee(cartesRetourneeVide);
      }, 1000)
    }
    
    setNbrEssaisRestant(nbrEssaisRestant-1)
  }

  const relancerJeu = () => {
    setCarteRetournee(cartesRetourneeVide);
    setNbrEssaisRestant(20);
    genererCartes();
  }

  const genererCartes = () => {
    let cartesDisponible: ICarte[] = [
      { id: -1, photo: "/chat1.png", retournee: false},
      { id: -1, photo: "/chat2.png", retournee: false},
      { id: -1, photo: "/chat3.png", retournee: false},
      { id: -1, photo: "/chat4.png", retournee: false},
      { id: -1, photo: "/chat5.png", retournee: false},
      { id: -1, photo: "/chat6.png", retournee: false},
      { id: -1, photo: "/chat7.png", retournee: false},
      { id: -1, photo: "/chat8.png", retournee: false},
      { id: -1, photo: "/chat1.png", retournee: false},
      { id: -1, photo: "/chat2.png", retournee: false},
      { id: -1, photo: "/chat3.png", retournee: false},
      { id: -1, photo: "/chat4.png", retournee: false},
      { id: -1, photo: "/chat5.png", retournee: false},
      { id: -1, photo: "/chat6.png", retournee: false},
      { id: -1, photo: "/chat7.png", retournee: false},
      { id: -1, photo: "/chat8.png", retournee: false}
    ];

    for (let i = 0; i < 16; i++) {
      var cases = Math.floor(Math.random() * cartesDisponible.length);

      cartesChoisies[i] = cartesDisponible[cases];
      cartesDisponible.splice(cases,1);
    }
  };

  useEffect(() => {
    if(cartesRetournee.length == 2)
      validerCartes();
  }, [cartesRetournee]);

  useEffect(() => {
    genererCartes();
  }, [])

  useEffect(() => {
    if (nbrEssaisRestant == 0)
      setMessage("Vous avez perdu le jeu!!");
  }, [nbrEssaisRestant])

  return (
    <>
      <h1>{message}</h1>
      <Button variant="contained" onClick={relancerJeu}>
        RELANCER LE JEU
      </Button>
      <p>Nombre de coup restant: {nbrEssaisRestant}</p>
      <Grid2 container spacing={4} direction="column" alignItems="center" >
        <Grid2 container spacing={4} direction="row" alignItems="center" >
          <Carte id={0} photo={cartesChoisies[0].photo} retournee={cartesChoisies[0].retournee} />
          <Carte id={1} photo={cartesChoisies[1].photo} retournee={cartesChoisies[1].retournee} />
          <Carte id={2} photo={cartesChoisies[2].photo} retournee={cartesChoisies[2].retournee} />
          <Carte id={3} photo={cartesChoisies[3].photo} retournee={cartesChoisies[3].retournee} />
        </Grid2>
        <Grid2 container spacing={4} direction="row" alignItems="center" >
          <Carte id={4} photo={cartesChoisies[4].photo} retournee={cartesChoisies[4].retournee} />
          <Carte id={5} photo={cartesChoisies[5].photo} retournee={cartesChoisies[5].retournee} />
          <Carte id={6} photo={cartesChoisies[6].photo} retournee={cartesChoisies[6].retournee} />
          <Carte id={7} photo={cartesChoisies[7].photo} retournee={cartesChoisies[7].retournee} />
        </Grid2>
        <Grid2 container spacing={4} direction="row" alignItems="center" >
          <Carte id={8} photo={cartesChoisies[8].photo} retournee={cartesChoisies[8].retournee} />
          <Carte id={9} photo={cartesChoisies[9].photo} retournee={cartesChoisies[9].retournee} />
          <Carte id={10} photo={cartesChoisies[10].photo} retournee={cartesChoisies[10].retournee} />
          <Carte id={11} photo={cartesChoisies[11].photo} retournee={cartesChoisies[11].retournee} />
        </Grid2>
        <Grid2 container spacing={4} direction="row" alignItems="center" >
          <Carte id={12} photo={cartesChoisies[12].photo} retournee={cartesChoisies[12].retournee} />
          <Carte id={13} photo={cartesChoisies[13].photo} retournee={cartesChoisies[13].retournee} />
          <Carte id={14} photo={cartesChoisies[14].photo} retournee={cartesChoisies[14].retournee} />
          <Carte id={15} photo={cartesChoisies[15].photo} retournee={cartesChoisies[15].retournee} />
        </Grid2>
      </Grid2>
    </>
  );
}
