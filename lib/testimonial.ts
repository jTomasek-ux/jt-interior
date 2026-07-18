export type Testimonial = {
  quote: string[];
  name: string;
  role: string;
  projectSlug: string;
  projectName: string;
  projectMeta: string;
  projectImage: string;
};

export const testimonial: Testimonial = {
  quote: [
    "From the initial meeting I was impressed by the genuine care and clarity JT Interiors brought to our brief. The team listened closely, stayed calm under pressure, and made every decision feel considered rather than rushed.",
    "As the design evolved, they welcomed our feedback and kept us involved without ever losing the vision. The finished interior feels exactly like home, strong, balanced, and beautifully resolved in every detail.",
  ],
  name: "Elena",
  role: "Homeowner of Harbor House",
  projectSlug: "harbor-house",
  projectName: "Harbor House",
  projectMeta: "Residential · 2024",
  projectImage: "/images/1.2.jpg",
};
