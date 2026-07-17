// EDUCATIONAL local pages (Phase 3). NO delivery/service-radius claims — these
// describe the area's agriculture and what Rodgers offers generally, with a soft
// "contact us" CTA. Only verified business facts are used.
export interface Area { slug: string; city: string; county: string; intro: string; local: string[]; }
export const AREAS: Area[] = [
  { slug: "saluda-sc", city: "Saluda", county: "Saluda County",
    intro: "Rodgers Fertilizer has called Saluda home since 1976. Growers in and around Saluda County have long relied on us for custom-blended fertilizer, lime, seed, and farm supplies.",
    local: ["Saluda County agriculture spans cattle and pasture, hay, poultry, row crops, and peaches.",
      "Cool-season and warm-season forages both play a role here, so timing lime and fertilizer to the season matters.",
      "We're located at 409 N Main St in Saluda — stop in, or ask us about pickup and delivery options for your operation."] },
  { slug: "newberry-sc", city: "Newberry", county: "Newberry County",
    intro: "Newberry County growers are part of the farming community Rodgers Fertilizer serves from nearby Saluda — custom blends, bulk and bagged fertilizer, lime, seed, and Bush Hog equipment and parts.",
    local: ["Newberry County has a strong livestock, cattle, and hay presence alongside row crops.",
      "Hay ground in particular benefits from replacing the potassium each cutting removes — ask us about potash and hay-field blends.",
      "Tell us your location and we'll talk through pickup and delivery options."] },
  { slug: "greenwood-sc", city: "Greenwood", county: "Greenwood County",
    intro: "Growers around Greenwood County can reach Rodgers Fertilizer in Saluda for custom fertilizer blending, bulk and bagged product, lime, seed, and farm equipment and parts.",
    local: ["Greenwood-area operations include pasture, hay, and row-crop ground plus rural landowners and food-plot managers.",
      "A soil test is the best first step for any fertility plan — bring it to us and we'll build the blend.",
      "Ask us about the packaging and pickup or delivery that fits your operation."] },
  { slug: "lexington-sc", city: "Lexington", county: "Lexington County",
    intro: "From nearby Saluda, Rodgers Fertilizer serves growers, landowners, and food-plot managers connected to the Lexington County area with custom blends, lime, seed, and Bush Hog equipment and parts.",
    local: ["Lexington County blends rural agriculture with pasture, hay, lawns, turf, and hunting properties.",
      "Whether it's a pasture, a food plot, or a lawn and garden, the right analysis and lime make the difference.",
      "Reach out and we'll help you pick the right product and talk through pickup or delivery."] },
];
export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
