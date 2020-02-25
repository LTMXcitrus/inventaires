import {Container, KitElement} from './model';

const element = (label: string, quantity?: number): KitElement => {
  return {label, quantity};
};


const pocheAdministrativeLocal: Container = {
  id: 'sac-admin-local',
  label: 'Poche administrative',
  elements: [
    element('Bracelets SNV'),
    element('Fiches d\'intervention', 20),
    element('Main courante'),
    element('Fiches de décharge'),
    element('Carnet traçabilité hygiène'),
    element('Convention et ordre de mission'),
    element('Fiche DSA')
  ]
};


const sacO2Local: Container = {
  id: 'sac-o2-local',
  label: 'Sac O²',
  elements: [
    {
      id: 'sac-o2-local-poche-avant',
      label: 'Poche avant',
      elements: [
        element('Paires de lunette de protection', 4),
        element('Masques FFP2', 4),
        element('AMS Manuel'),
        element('Sondes aspi adulte', 2),
        element('Sondes aspi enfant', 2),
        element('Boite de canules de guedel'),
        element('Tubulure O2', 1),
        element('Raccord biconique', 1),
        element('Stop-vide', 1)
      ]
    },
    {
      id: 'sac-o2-local-poche-bouteille',
      label: 'Poche bouteille',
      elements: [
        element('Bouteille O2 5L pleine'),
        element('Collier réglable adulte', 1),
        element('Collier réglable enfant', 1)
      ]
    },
    {
      id: 'sac-o2-local-poche-droite',
      label: 'Poche droite',
      elements: [
        element('BAVU adulte', 1),
        element('MHC adulte', 2),
        element('lunettes O2', 2)
      ]
    },
    {
      id: 'sac-o2-local-poche-gauche',
      label: 'Poche gauche',
      elements: [
        element('MHC enfant', 2),
        element('BAVU enfant', 1),
        element('BAVU nouveau-né', 1)
      ]
    }
  ]
};

const sacInterLocal: Container = {
  id: 'sac-inter-local',
  label: 'Sac d\'intervention',
  elements: [
    {
      id: 'sac-inter-local-poche-avant',
      label: 'Poche avant',
      elements: [
        {
          label: 'Poche bilan',
          elements: [
            element('Tensiomètres auto et manuel'),
            element('Thermomètre tympanique'),
            element('Protections thermomètre tympanique', 20),
            element('Oxymètre'),
            element('Dextro')
          ]
        },
        element('Vomix', 10),
        element('Métallines', 2),
        element('sucres')
      ]
    },
    {
      id: 'sac-inter-local-poche-droite',
      label: 'Poche droite',
      elements: [
        element('CHU', 2),
        element('Garrots', 2),
        element('Chito-sam', 1),
      ]
    },
    {
      id: 'sac-inter-local-poche-gauche',
      label: 'Poche gauche',
      elements: [
        element('OPCT', 1),
        element('DAOM', 2),
        element('DASRI', 2),
        element('Sac rouge (décontamination)', 2)
      ]
    },
    {
      id: 'sac-inter-local-centrale-1',
      label: 'Central 1',
      elements: [
        element('Manugel'),
        element('Lampe torche'),
        element('10 chlorhex', 10),
        element('10 sérum phy', 10),
        element('rouleau sparadrap', 1),
        element('Pansements prédécoupés'),
        element('Pince à écharde'),
      ]
    }, {
      id: 'sac-inter-local-kmu',
      label: 'Poche médicament',
      elements: [element('KMU')]
    },
    {
      id: 'sac-inter-local-poche-1',
      label: 'Pochette 1',
      elements: [
        element('Gants non stériles (chaque taille', 10)]
    },
    {
      id: 'sac-inter-local-poche-2',
      label: 'Pochette 2',
      elements: [element('2 champs stériles')]
    },
    {
      id: 'sac-inter-local-poche-3',
      label: 'Pochette 3',
      elements: [
        element('Bandes nylex 7cm', 2),
        element('Bandes nylex 10cm', 2),
        element('Maille élastique doigt'),
        element('Maille élastique membre')
      ]
    },
    {
      id: 'sac-inter-local-poche-4',
      label: 'Pochette 4',
      elements: [
        element('Compresses', 50),
        element('Pansements américains', 2)
      ]
    },
    {
      id: 'sac-inter-local-central-2',
      label: 'Central 2',
      elements: [
        element('Rubalise'),
        element('Gesco'),
        element('Paire de petits ciseaux'),
        element('paires de Gants manutention', 2),
        element('écharpes triangulaires', 2),
        element('cold packs', 2)
      ]
    }
  ]
};


export const LotPaps: Container = {
  id: 'lot-paps',
  elements: [
    pocheAdministrativeLocal,
    sacO2Local,
    sacInterLocal
  ]
};
