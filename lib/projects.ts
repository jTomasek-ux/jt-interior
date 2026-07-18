export type Project = {
  id: string;
  slug: string;
  name: string;
  nameLines: [string, string?];
  category: string;
  monogram: string;
  image: string;
  hoverColor: string;
  row: number;
};

/** Same leading number = same row (e.g. 1.1–1.4 share a row). */
export const projects: Project[] = [
  {
    id: "1.1",
    slug: "naya",
    name: "Naya",
    nameLines: ["Naya"],
    category: "Residential",
    monogram: "NY",
    image: "/images/1.1.jpg",
    hoverColor: "#C45C3E",
    row: 1,
  },
  {
    id: "1.2",
    slug: "harbor-house",
    name: "Harbor House",
    nameLines: ["Harbor", "House"],
    category: "Residential",
    monogram: "HH",
    image: "/images/1.2.jpg",
    hoverColor: "#8B7355",
    row: 1,
  },
  {
    id: "1.3",
    slug: "atelier-loft",
    name: "Atelier Loft",
    nameLines: ["Atelier", "Loft"],
    category: "Residential",
    monogram: "AL",
    image: "/images/1.3.jpg",
    hoverColor: "#5C6B73",
    row: 1,
  },
  {
    id: "1.4",
    slug: "verdant-court",
    name: "Verdant Court",
    nameLines: ["Verdant", "Court"],
    category: "Hospitality",
    monogram: "VC",
    image: "/images/1.4.jpg",
    hoverColor: "#6B8E7A",
    row: 1,
  },
  {
    id: "2.1",
    slug: "maurice-cafe",
    name: "Maurice Cafe",
    nameLines: ["Maurice Cafe", "St-Honore"],
    category: "Hospitality",
    monogram: "MS",
    image: "/images/2.1.jpg",
    hoverColor: "#6B8E7A",
    row: 2,
  },
  {
    id: "2.2",
    slug: "oak-and-stone",
    name: "Oak & Stone",
    nameLines: ["Oak &", "Stone"],
    category: "Residential",
    monogram: "OS",
    image: "/images/2.2.jpg",
    hoverColor: "#A67C52",
    row: 2,
  },
  {
    id: "2.3",
    slug: "meridian-club",
    name: "Meridian Club",
    nameLines: ["Meridian", "Club"],
    category: "Hospitality",
    monogram: "MC",
    image: "/images/2.3.jpg",
    hoverColor: "#4A5560",
    row: 2,
  },
  {
    id: "3.1",
    slug: "berri",
    name: "Berri",
    nameLines: ["Berri"],
    category: "Residential",
    monogram: "BR",
    image: "/images/3.1.jpg",
    hoverColor: "#9A7B6A",
    row: 3,
  },
  {
    id: "3.2",
    slug: "cook-kitchen",
    name: "Cook",
    nameLines: ["Cook"],
    category: "Hospitality",
    monogram: "CK",
    image: "/images/3.2.jpg",
    hoverColor: "#C45C3E",
    row: 3,
  },
  {
    id: "3.3",
    slug: "segur",
    name: "Segur",
    nameLines: ["Segur"],
    category: "Residential",
    monogram: "SG",
    image: "/images/3.3.jpg",
    hoverColor: "#6B8E7A",
    row: 3,
  },
  {
    id: "3.4",
    slug: "tonnenami",
    name: "Tonnenami",
    nameLines: ["Tonnenami"],
    category: "Residential",
    monogram: "TN",
    image: "/images/3.4.jpg",
    hoverColor: "#7A6B5C",
    row: 3,
  },
  {
    id: "4.1",
    slug: "linden-studio",
    name: "Linden Studio",
    nameLines: ["Linden", "Studio"],
    category: "Residential",
    monogram: "LS",
    image: "/images/4.1.jpg",
    hoverColor: "#5C6B73",
    row: 4,
  },
  {
    id: "4.2",
    slug: "brass-gate",
    name: "Brass Gate",
    nameLines: ["Brass", "Gate"],
    category: "Hospitality",
    monogram: "BG",
    image: "/images/4.2.jpg",
    hoverColor: "#A67C52",
    row: 4,
  },
  {
    id: "4.3",
    slug: "solara",
    name: "Solara",
    nameLines: ["Solara"],
    category: "Residential",
    monogram: "SO",
    image: "/images/4.3.jpg",
    hoverColor: "#8B7355",
    row: 4,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectRows() {
  const rows = new Map<number, Project[]>();
  for (const project of projects) {
    const list = rows.get(project.row) ?? [];
    list.push(project);
    rows.set(project.row, list);
  }
  return [...rows.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, items]) => items);
}
