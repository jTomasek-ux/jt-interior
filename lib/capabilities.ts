export type Capability = {
  id: string;
  index: string;
  title: string;
  summary: string;
};

export const capabilitiesImage = "/images/Capbilities.jpg";

export const capabilities: Capability[] = [
  {
    id: "concept-brief",
    index: "01",
    title: "Concept & Brief",
    summary:
      "Listen first: lifestyle, constraints, and vision set a clear brief before design begins.",
  },
  {
    id: "spatial-planning",
    index: "02",
    title: "Spatial Planning",
    summary:
      "Layouts that balance light, flow, and how you actually live, work, and move through the space.",
  },
  {
    id: "interior-design",
    index: "03",
    title: "Interior Design",
    summary:
      "Strong forms, quiet elegance, and a coherent atmosphere resolved across every room.",
  },
  {
    id: "material-finish",
    index: "04",
    title: "Material & Finish Selection",
    summary:
      "Enduring palettes — timber, stone, metal, textiles — chosen with intent and longevity in mind.",
  },
  {
    id: "custom-joinery",
    index: "05",
    title: "Custom Joinery & Detail",
    summary:
      "Built-ins and refined details that make the interior feel considered and unmistakably yours.",
  },
  {
    id: "delivery-coordination",
    index: "06",
    title: "Delivery & Coordination",
    summary:
      "Clear documentation and builder liaison so the design lands as intended on site.",
  },
];

export const capabilitiesCopy = [
  "Our approach at JT Interiors is designed to make your journey from concept to completion as smooth and enjoyable as possible.",
  "With our 6-stage process, we prioritise clarity, collaboration, and your unique vision. At every step, we'll keep you informed, inspired, and involved.",
] as const;
