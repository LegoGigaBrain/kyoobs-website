const formationAsset = (file) => `/assets/formation/${file}`;

export const formationVariants = [
  {
    id: "formation-01",
    title: "Bloom Signal",
    layers: [
      {
        id: "background-bloom",
        src: formationAsset("Background_1.png"),
        category: "Background",
        startPosition: { x: 50, y: 50 },
        targetPosition: { x: 50, y: 50 },
        scale: 1.05,
        rotation: 0,
        depth: "far",
        zIndex: 0
      },
      {
        id: "ears-e8d",
        src: formationAsset("Ears_Alien_E8D.png"),
        category: "Ears",
        startPosition: { x: 14, y: 24 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -5,
        depth: "mid",
        zIndex: 1
      },
      {
        id: "type-e8d",
        src: formationAsset("Type_E8D-Kyoob.png"),
        category: "Type",
        startPosition: { x: 78, y: 28 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 4,
        depth: "mid",
        zIndex: 3
      },
      {
        id: "hair-fro",
        src: formationAsset("Hair_Fro.png"),
        category: "Hair",
        startPosition: { x: 44, y: 14 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -3,
        depth: "foreground",
        zIndex: 4
      },
      {
        id: "nose-bizolium",
        src: formationAsset("Nose_Bizolium_Gold.png"),
        category: "Nose",
        startPosition: { x: 20, y: 72 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 7,
        depth: "foreground",
        zIndex: 6
      },
      {
        id: "left-clear-mint",
        src: formationAsset("LeftEye_ClearEye_Mint.png"),
        category: "Left Eye",
        startPosition: { x: 22, y: 42 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -8,
        depth: "foreground",
        zIndex: 9
      },
      {
        id: "right-open-caution",
        src: formationAsset("RightEye_OpenEye_Caution.png"),
        category: "Right Eye",
        startPosition: { x: 74, y: 62 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 6,
        depth: "foreground",
        zIndex: 10
      },
      {
        id: "mouth-mango",
        src: formationAsset("Mouth_Mango_Truth.png"),
        category: "Mouth",
        startPosition: { x: 60, y: 84 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 3,
        depth: "foreground",
        zIndex: 12
      }
    ]
  },
  {
    id: "formation-02",
    title: "Ceremony Tetra",
    layers: [
      {
        id: "background-ceremony",
        src: formationAsset("Background_3.png"),
        category: "Background",
        startPosition: { x: 50, y: 50 },
        targetPosition: { x: 50, y: 50 },
        scale: 1.05,
        rotation: 0,
        depth: "far",
        zIndex: 0
      },
      {
        id: "ears-tetra",
        src: formationAsset("Ears_Beebop_Tetra.png"),
        category: "Ears",
        startPosition: { x: 82, y: 20 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 6,
        depth: "mid",
        zIndex: 1
      },
      {
        id: "type-tetra",
        src: formationAsset("Type_Tetra-Kyoob.png"),
        category: "Type",
        startPosition: { x: 18, y: 62 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -5,
        depth: "mid",
        zIndex: 3
      },
      {
        id: "headband-gold",
        src: formationAsset("Headband_Gold.png"),
        category: "Headband",
        startPosition: { x: 26, y: 18 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 4,
        depth: "foreground",
        zIndex: 8
      },
      {
        id: "nose-triagai",
        src: formationAsset("Nose_Triagai_Pastel.png"),
        category: "Nose",
        startPosition: { x: 76, y: 74 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -7,
        depth: "foreground",
        zIndex: 6
      },
      {
        id: "left-cup-berry",
        src: formationAsset("LeftEye_CupEye_Berry.png"),
        category: "Left Eye",
        startPosition: { x: 16, y: 38 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -4,
        depth: "foreground",
        zIndex: 9
      },
      {
        id: "right-king-aqua",
        src: formationAsset("RightEye_KingEye_Aqua.png"),
        category: "Right Eye",
        startPosition: { x: 86, y: 46 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 7,
        depth: "foreground",
        zIndex: 10
      },
      {
        id: "mouth-sky",
        src: formationAsset("Mouth_AquaBerry_Sky.png"),
        category: "Mouth",
        startPosition: { x: 42, y: 86 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -3,
        depth: "foreground",
        zIndex: 12
      }
    ]
  },
  {
    id: "formation-03",
    title: "Ice Frequency",
    layers: [
      {
        id: "background-frequency",
        src: formationAsset("Background_5.png"),
        category: "Background",
        startPosition: { x: 50, y: 50 },
        targetPosition: { x: 50, y: 50 },
        scale: 1.05,
        rotation: 0,
        depth: "far",
        zIndex: 0
      },
      {
        id: "ears-ice",
        src: formationAsset("Ears_Eclipse_Ice.png"),
        category: "Ears",
        startPosition: { x: 18, y: 78 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 6,
        depth: "mid",
        zIndex: 1
      },
      {
        id: "type-ice",
        src: formationAsset("Type_Ice-Kyoob.png"),
        category: "Type",
        startPosition: { x: 78, y: 38 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -4,
        depth: "mid",
        zIndex: 3
      },
      {
        id: "hat-purple",
        src: formationAsset("Hats_Purple_Kufi.png"),
        category: "Hats",
        startPosition: { x: 50, y: 12 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -2,
        depth: "foreground",
        zIndex: 7
      },
      {
        id: "nose-trifatso",
        src: formationAsset("Nose_Trifatso_Purple.png"),
        category: "Nose",
        startPosition: { x: 24, y: 26 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 9,
        depth: "foreground",
        zIndex: 6
      },
      {
        id: "left-twinkle",
        src: formationAsset("LeftEye_TwinkleEye_Saber.png"),
        category: "Left Eye",
        startPosition: { x: 80, y: 70 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 5,
        depth: "foreground",
        zIndex: 9
      },
      {
        id: "right-side-royal",
        src: formationAsset("RightEye_SideEye_Royal.png"),
        category: "Right Eye",
        startPosition: { x: 32, y: 80 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -8,
        depth: "foreground",
        zIndex: 10
      },
      {
        id: "mouth-strawberry",
        src: formationAsset("Mouth_Strawberry_Gold.png"),
        category: "Mouth",
        startPosition: { x: 72, y: 86 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 4,
        depth: "foreground",
        zIndex: 12
      }
    ]
  },
  {
    id: "formation-04",
    title: "Alien Mask Field",
    layers: [
      {
        id: "background-charge",
        src: formationAsset("Background_8.png"),
        category: "Background",
        startPosition: { x: 50, y: 50 },
        targetPosition: { x: 50, y: 50 },
        scale: 1.05,
        rotation: 0,
        depth: "far",
        zIndex: 0
      },
      {
        id: "ears-alien",
        src: formationAsset("Ears_SquareRoot_Alien.png"),
        category: "Ears",
        startPosition: { x: 78, y: 78 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -6,
        depth: "mid",
        zIndex: 1
      },
      {
        id: "type-alien",
        src: formationAsset("Type_Alien-Kyoob.png"),
        category: "Type",
        startPosition: { x: 22, y: 18 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 5,
        depth: "mid",
        zIndex: 3
      },
      {
        id: "mask-shabaza",
        src: formationAsset("Mask_Shabaza_Maskateer.png"),
        category: "Mask",
        startPosition: { x: 84, y: 18 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -4,
        depth: "foreground",
        zIndex: 5
      },
      {
        id: "nose-blok",
        src: formationAsset("Nose_Blok_Red.png"),
        category: "Nose",
        startPosition: { x: 16, y: 58 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -9,
        depth: "foreground",
        zIndex: 6
      },
      {
        id: "left-straight",
        src: formationAsset("LeftEye_StraightEye_Haze.png"),
        category: "Left Eye",
        startPosition: { x: 70, y: 34 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 6,
        depth: "foreground",
        zIndex: 9
      },
      {
        id: "right-lazy",
        src: formationAsset("RightEye_LazyEye_Softserve.png"),
        category: "Right Eye",
        startPosition: { x: 32, y: 84 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: -5,
        depth: "foreground",
        zIndex: 10
      },
      {
        id: "mouth-nude",
        src: formationAsset("Mouth_Nude_Ice.png"),
        category: "Mouth",
        startPosition: { x: 80, y: 64 },
        targetPosition: { x: 50, y: 50 },
        scale: 1,
        rotation: 5,
        depth: "foreground",
        zIndex: 12
      }
    ]
  }
];
