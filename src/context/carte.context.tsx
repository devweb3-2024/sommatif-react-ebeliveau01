import React, { useState } from 'react';

export interface ICarte {
  id: number;
  photo: string;
  retournee: boolean;
}

export type CarteRetourneeContextType = {
  cartesRetournee: ICarte[];
  nbrEssaisRestant: number;
  setCarteRetournee: (cartes: ICarte[]) => void;
  setNbrEssaisRestant: (nbrEssai: number) => void;
};

export const cartesRetourneeVide: ICarte[] = [];

export const CarteContext = React.createContext<CarteRetourneeContextType>({
  cartesRetournee: cartesRetourneeVide,
  nbrEssaisRestant: 20,
  setCarteRetournee: () => {},
  setNbrEssaisRestant: () => {},
});

export default function CarteProvider(props: any) {
  const [cartesRetournee, setCarteRetournee] = useState(cartesRetourneeVide);
  const [nbrEssaisRestant, setNbrEssaisRestant] = useState(20);

  const values = {
    cartesRetournee,
    nbrEssaisRestant,
    setCarteRetournee,
    setNbrEssaisRestant,
  };

  return (
    <CarteContext.Provider value={values}>
      {props.children}
    </CarteContext.Provider>
  );
}