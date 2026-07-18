export type Capability = {
  id: string;
  index: string;
  title: string;
};

export const capabilitiesImage = "/images/Capbilities.jpg";

export const capabilities: Capability[] = [
  {
    id: "concept-brief",
    index: "01",
    title: "Concept & Brief",
  },
  {
    id: "spatial-planning",
    index: "02",
    title: "Spatial Planning",
  },
  {
    id: "interior-design",
    index: "03",
    title: "Interior Design",
  },
  {
    id: "material-finish",
    index: "04",
    title: "Material & Finish Selection",
  },
  {
    id: "custom-joinery",
    index: "05",
    title: "Custom Joinery & Detail",
  },
  {
    id: "delivery-coordination",
    index: "06",
    title: "Delivery & Coordination",
  },
];

export const capabilitiesCopy = [
  "Our approach at JT Interiors is designed to make your journey from concept to completion as smooth and enjoyable as possible.",
  "With our 6-stage process, we prioritise clarity, collaboration, and your unique vision. At every step, we'll keep you informed, inspired, and involved.",
] as const;
