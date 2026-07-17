// ---------------------------------------------------------------------------
// Resource Center — EDUCATIONAL industry knowledge (Phase 3).
// This is original, general agronomy/equipment guidance written to build topical
// authority. It contains NO fabricated business facts and NO chemical/pesticide
// application rates (compliance). Where Rodgers is mentioned, only VERIFIED facts
// are used (since 1976, family-owned, Saluda SC, custom blends, bulk/bagged,
// authorized Bush Hog dealer, carries Great Plains). General guidance defers to a
// soil test and to calling the store.
// ---------------------------------------------------------------------------
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "note"; text: string };
export type Center = "Fertilizer" | "Equipment" | "Seed";
export interface Article {
  slug: string; center: Center; title: string; metaTitle: string; metaDescription: string;
  intro: string; blocks: Block[]; faqs: { q: string; a: string }[];
  related: { label: string; href: string }[]; cta: { label: string; href: string };
  updated: string;
}
const D = "2026-07-17";
const helpFert = { t: "note" as const, text: "How Rodgers helps: we've blended fertilizer to our customers' needs in Saluda since 1976 — bagged, palletized, in one-ton totes, or bulk, with pickup or delivery. Tell us your crop and goal and we'll build the blend." };
const ctaQuote = { label: "Request a Fertilizer Quote", href: "/request-a-quote?form=fertilizer" };

export const ARTICLES: Article[] = [
  {
    slug: "understanding-npk", center: "Fertilizer",
    title: "Understanding N-P-K: What the Three Numbers Mean",
    metaTitle: "Understanding N-P-K Fertilizer Numbers",
    metaDescription: "What the three fertilizer numbers (N-P-K) mean, what each nutrient does, and how to read a fertilizer analysis for your crop.",
    intro: "Every bag of fertilizer carries three numbers — like 10-10-10 or 17-17-17. Those numbers are the analysis, and once you know how to read them, choosing the right product gets a lot simpler.",
    blocks: [
      { t: "h2", text: "What the three numbers mean" },
      { t: "p", text: "The numbers are the percentage by weight of three nutrients, always in the same order: Nitrogen (N), Phosphorus (P), and Potassium (K). A 50-lb bag of 10-10-10 contains 10% of each — about 5 lbs of each nutrient — with the rest being carrier and filler." },
      { t: "ul", items: [
        "Nitrogen (N) drives green, leafy growth — it's what greens up a pasture or lawn.",
        "Phosphorus (P) supports roots, establishment, and seed/fruit development.",
        "Potassium (K) builds overall plant health, stress tolerance, and winter hardiness.",
      ] },
      { t: "h2", text: "Balanced vs. targeted blends" },
      { t: "p", text: "A balanced blend like 10-10-10 or 17-17-17 supplies all three nutrients evenly and is a dependable all-purpose choice. A targeted product — like 0-0-60 (potash) — supplies just one nutrient when a soil test shows you're short in that area. Higher numbers simply mean a more concentrated product, so you need fewer pounds to deliver the same nutrients." },
      { t: "h2", text: "How to choose the right analysis" },
      { t: "p", text: "The most reliable way is a soil test — it tells you exactly which nutrients your ground needs and which it already has, so you don't overspend or over-apply. From there you can pick a standard blend or have a custom blend built to match." },
      helpFert,
    ],
    faqs: [
      { q: "What does 10-10-10 mean?", a: "It's a balanced fertilizer that is 10% nitrogen, 10% phosphorus, and 10% potassium by weight — an even, all-purpose analysis." },
      { q: "Is a higher number better?", a: "Not necessarily — higher numbers are more concentrated, so you use less product. The right analysis depends on your crop and your soil test, not on the size of the numbers." },
    ],
    related: [{ label: "Custom vs. Standard Blends", href: "/resources/custom-vs-standard" }, { label: "Soil Testing Guide", href: "/resources/soil-testing-guide" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "custom-vs-standard", center: "Fertilizer",
    title: "Custom vs. Standard Fertilizer Blends: Which Do You Need?",
    metaTitle: "Custom vs. Standard Fertilizer Blends",
    metaDescription: "When an off-the-shelf blend like 10-10-10 is enough, and when a custom fertilizer blend built to your soil test saves money and works better.",
    intro: "Standard blends are convenient and dependable. Custom blends are precise. Knowing when to use each keeps your fertilizer dollars working as hard as possible.",
    blocks: [
      { t: "h2", text: "When a standard blend works" },
      { t: "p", text: "For general lawn, garden, and pasture feeding — or when you just need to put down a reliable, balanced product — a standard blend like 10-10-10 or 17-17-17 is simple and effective. It's ready to go and easy to budget." },
      { t: "h2", text: "When a custom blend pays off" },
      { t: "p", text: "Custom blending matches the exact nutrients your ground is short on, based on a soil test and your crop. That means you're not paying for nutrients you don't need, and you're not leaving your fields short on the ones you do. For larger acreage, that precision usually more than pays for itself." },
      { t: "ul", items: [
        "You have a recent soil test and want to hit it exactly.",
        "You're feeding a specific crop — pasture, hay, food plots — with specific needs.",
        "You're buying enough volume that dialing in the analysis matters to the bill.",
      ] },
      helpFert,
    ],
    faqs: [
      { q: "Do I need a soil test for a custom blend?", a: "It's the best starting point, but not required — we can work from your crop and goals and recommend an analysis." },
      { q: "Is custom blending only for big farms?", a: "No — custom blends help any grower who wants the right nutrients for their ground, at any scale." },
    ],
    related: [{ label: "Understanding N-P-K", href: "/resources/understanding-npk" }, { label: "Custom Blends", href: "/fertilizer/custom-blends" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "when-to-fertilize-pasture", center: "Fertilizer",
    title: "When to Fertilize Pasture in South Carolina",
    metaTitle: "When to Fertilize Pasture (South Carolina)",
    metaDescription: "General timing for fertilizing cool- and warm-season pasture in South Carolina, and why lime and a soil test come first.",
    intro: "Timing matters as much as the blend. Fertilizer works best when it's applied while the grass is actively growing and able to use it.",
    blocks: [
      { t: "h2", text: "Match timing to your grass type" },
      { t: "p", text: "Cool-season forages (like fescue and ryegrass) do most of their growing in spring and fall, so those are the windows they respond to fertilizer best. Warm-season grasses (like bermuda and bahia) grow through late spring and summer, so they're fed as they green up and through the growing season." },
      { t: "h2", text: "Lime first, then fertilizer" },
      { t: "p", text: "If your soil pH is too low, fertilizer can't do its job — the nutrients get tied up in the soil. Lime corrects pH, but it takes months to work, so it's often applied ahead of the season. A soil test tells you whether you need lime and how much." },
      { t: "ul", items: [
        "Test your soil so you're feeding what the ground actually needs.",
        "Apply lime early enough for it to react before the growing season.",
        "Fertilize while the grass is actively growing, not dormant.",
      ] },
      { t: "note", text: "How Rodgers helps: we supply pasture blends, agricultural lime, bulk and bagged product, and delivery — and we've done it for Saluda-area growers since 1976. Call and we'll help you plan." },
    ],
    faqs: [
      { q: "Should I lime or fertilize first?", a: "Address pH with lime first — if pH is off, fertilizer is far less effective. A soil test tells you what you need." },
      { q: "Can I fertilize pasture in summer?", a: "Warm-season grasses use summer fertilizer well; cool-season grasses respond better in spring and fall." },
    ],
    related: [{ label: "Lime vs. Fertilizer", href: "/resources/lime-vs-fertilizer" }, { label: "Pasture Fertilizer", href: "/fertilizer/pasture" }],
    cta: { label: "Request a Pasture Quote", href: "/request-a-quote?form=fertilizer" }, updated: D,
  },
  {
    slug: "lime-vs-fertilizer", center: "Fertilizer",
    title: "Lime vs. Fertilizer: What's the Difference?",
    metaTitle: "Lime vs. Fertilizer — What's the Difference?",
    metaDescription: "Lime corrects soil pH; fertilizer feeds the plant. Why you often need both, and why lime goes down first.",
    intro: "Lime and fertilizer do two different jobs. Using one without the other is one of the most common — and most expensive — mistakes in pasture and crop fertility.",
    blocks: [
      { t: "p", text: "Fertilizer supplies nutrients (nitrogen, phosphorus, potassium and others) that plants use to grow. Lime doesn't feed the plant directly — it raises soil pH, correcting acidity so those nutrients are actually available to the roots." },
      { t: "h2", text: "Why pH matters so much" },
      { t: "p", text: "In acidic soil, much of the fertilizer you apply gets chemically locked up and never reaches the plant. Correcting pH with lime can make your existing fertilizer far more effective — sometimes it's the single best return on your fertility dollar." },
      { t: "ul", items: [
        "Fertilizer = the meal. Lime = fixing the plate so the meal can be eaten.",
        "Lime is slow — apply it months ahead of when you need results.",
        "A soil test tells you both your pH (lime need) and your nutrient levels (fertilizer need).",
      ] },
      helpFert,
    ],
    faqs: [
      { q: "Can lime replace fertilizer?", a: "No — they do different jobs. Lime fixes pH; fertilizer feeds the plant. Most ground benefits from getting both right." },
      { q: "How long does lime take to work?", a: "Months, generally — which is why it's applied ahead of the season rather than expecting an immediate response." },
    ],
    related: [{ label: "Agricultural Lime", href: "/delivery/agricultural-lime" }, { label: "Soil Testing Guide", href: "/resources/soil-testing-guide" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "fertilizer-application-timing", center: "Fertilizer",
    title: "Fertilizer Application Timing: A Simple Framework",
    metaTitle: "Fertilizer Application Timing",
    metaDescription: "A simple way to think about when to apply fertilizer — tied to plant growth, not the calendar — for pasture, hay, gardens, and food plots.",
    intro: "The best time to fertilize is when the plant is growing and able to take the nutrients up. That one idea covers most timing decisions.",
    blocks: [
      { t: "p", text: "Fertilizer applied to dormant or stressed plants is largely wasted — and nitrogen in particular can be lost before the plant ever uses it. Tie your timing to active growth and you'll get more out of every bag." },
      { t: "ul", items: [
        "Cool-season forage & lawns: spring and fall growth flushes.",
        "Warm-season grasses & summer crops: late spring through summer.",
        "Food plots: at or shortly after planting, matched to the season you're planting.",
      ] },
      { t: "note", text: "Split applications — putting nutrients down in more than one pass — can reduce loss and keep growth steady. A soil test and your crop plan tell you how much, and we can help you split it." },
      helpFert,
    ],
    faqs: [
      { q: "Is it bad to fertilize too early?", a: "Fertilizing dormant plants wastes product and risks nutrient loss — wait for active growth." },
      { q: "What is a split application?", a: "Applying part of your fertilizer now and part later, so the plant gets steady feeding and less is lost." },
    ],
    related: [{ label: "Spring Fertilization Guide", href: "/resources/spring-fertilization-guide" }, { label: "Fall Fertilization Guide", href: "/resources/fall-fertilization-guide" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "spring-fertilization-guide", center: "Fertilizer",
    title: "Spring Fertilization Guide",
    metaTitle: "Spring Fertilization Guide",
    metaDescription: "What to fertilize in spring — pasture green-up, gardens, and food plots — and why a soil test and lime come first.",
    intro: "Spring is prime time for feeding cool-season growth and getting gardens and warm-season ground ready. A little planning now pays off all season.",
    blocks: [
      { t: "h2", text: "Spring priorities" },
      { t: "ul", items: [
        "Green up cool-season pasture and lawns as growth resumes.",
        "Feed gardens at planting for strong establishment.",
        "Get warm-season fields ready as soil warms.",
      ] },
      { t: "h2", text: "Don't skip the basics" },
      { t: "p", text: "If you didn't lime last fall and your pH is low, address it — and pull a soil test if you haven't recently. Feeding the right analysis beats guessing every time." },
      helpFert,
    ],
    faqs: [
      { q: "When does spring fertilizing start?", a: "As active growth resumes — it varies year to year, so watch the grass and the weather more than the date." },
      { q: "What blend for spring pasture?", a: "It depends on your soil test and forage; a balanced blend is a common starting point. We'll help you match it." },
    ],
    related: [{ label: "Fertilizer Application Timing", href: "/resources/fertilizer-application-timing" }, { label: "When to Fertilize Pasture", href: "/resources/when-to-fertilize-pasture" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "fall-fertilization-guide", center: "Fertilizer",
    title: "Fall Fertilization Guide",
    metaTitle: "Fall Fertilization Guide",
    metaDescription: "Why fall is the right time for lime, cool-season forage, and setting up next year's fields.",
    intro: "Fall is one of the most valuable — and most overlooked — fertility windows. What you do now sets up next spring.",
    blocks: [
      { t: "h2", text: "Fall priorities" },
      { t: "ul", items: [
        "Apply lime now so it has months to correct pH before spring.",
        "Feed cool-season forage and fall food plots as they establish.",
        "Build potassium and phosphorus levels for winter hardiness and next year.",
      ] },
      { t: "p", text: "Because lime works slowly, fall application means your pH is corrected by the time spring growth needs it — a simple move that makes next year's fertilizer work harder." },
      { t: "note", text: "How Rodgers helps: we supply lime and fall blends in bulk or bags, with pickup or delivery. Plan your fall now and beat the rush." },
    ],
    faqs: [
      { q: "Why apply lime in fall?", a: "Lime is slow to react — applying it in fall gives it months to raise pH before spring growth begins." },
      { q: "Should I fertilize food plots in fall?", a: "Fall plots are fed at or after planting; match the analysis to your soil and the seed you're planting." },
    ],
    related: [{ label: "Lime vs. Fertilizer", href: "/resources/lime-vs-fertilizer" }, { label: "Food Plot Calendar", href: "/resources/food-plot-calendar" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "soil-testing-guide", center: "Fertilizer",
    title: "Soil Testing Guide: The First Step in Any Fertility Plan",
    metaTitle: "Soil Testing Guide",
    metaDescription: "Why a soil test is the cheapest, highest-return step in fertilizing — what it tells you and how to pull a good sample.",
    intro: "A soil test is the cheapest tool in fertility and one of the highest-return. It replaces guesswork with a plan.",
    blocks: [
      { t: "h2", text: "What a soil test tells you" },
      { t: "ul", items: [
        "Your soil pH — whether you need lime, and how much.",
        "Your existing nutrient levels — what you have and what you're short on.",
        "A recommendation you can turn into the right blend and rate.",
      ] },
      { t: "h2", text: "Pulling a good sample" },
      { t: "p", text: "Take several small cores from across a field, mix them, and submit a representative sample. Sample fields with different soils or histories separately. In South Carolina, your county Extension office can help you test and read the results." },
      { t: "note", text: "Bring your results to us and we'll turn the recommendation into a blend — standard or custom — in the packaging and quantity you need." },
    ],
    faqs: [
      { q: "How often should I soil test?", a: "Every couple of years is a common rhythm, or when performance drops or you change what you're growing." },
      { q: "Where do I get a soil test?", a: "Your county Extension office is the usual starting point; bring the results to us for a blend recommendation." },
    ],
    related: [{ label: "Understanding N-P-K", href: "/resources/understanding-npk" }, { label: "Fertilizer Buying Guide", href: "/resources/fertilizer-buying-guide" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "fertilizer-buying-guide", center: "Fertilizer",
    title: "Fertilizer Buying Guide: Bags, Pallets, Totes, or Bulk",
    metaTitle: "Fertilizer Buying Guide — Packaging & Quantity",
    metaDescription: "How to choose between 50-lb bags, pallets, one-ton totes, and bulk fertilizer — and when delivery or spreading makes sense.",
    intro: "Once you know your blend, the next decision is how to buy it. The right packaging comes down to how much you need and how you'll handle it.",
    blocks: [
      { t: "h2", text: "Match packaging to your job" },
      { t: "ul", items: [
        "50-lb bags: gardens, small plots, and topping off — easy to handle.",
        "Pallets: larger jobs that still want bagged product.",
        "One-ton totes: bulk quantity with easier handling than loose bulk.",
        "Bulk: the most efficient way to move tons for fields and pastures.",
      ] },
      { t: "h2", text: "Getting it to the ground" },
      { t: "p", text: "Think about handling and application, not just price per ton. Bulk is efficient but you need a way to spread it; totes and pallets need equipment to move. Pickup keeps costs down; delivery saves you the trip and the equipment." },
      { t: "note", text: "How Rodgers helps: bags, pallets, one-ton totes, or bulk — with pickup, up to 24-ton flatbed delivery, and spreader-truck service or pull-behind spreaders. Ask us what fits your operation." },
    ],
    faqs: [
      { q: "Is bulk always cheaper?", a: "Per ton it's usually the most efficient, but factor in handling and spreading — sometimes totes or pallets fit the job better." },
      { q: "Can you spread it for me?", a: "Yes — ask about our spreader-truck service or borrowing a pull-behind spreader for your tractor." },
    ],
    related: [{ label: "Bulk Fertilizer", href: "/fertilizer/bulk" }, { label: "One-Ton Totes", href: "/fertilizer/one-ton-totes" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "when-to-use-10-10-10", center: "Fertilizer",
    title: "When to Use 10-10-10 Fertilizer",
    metaTitle: "When to Use 10-10-10 Fertilizer",
    metaDescription: "10-10-10 is a balanced, all-purpose fertilizer. Here's where it shines — lawns, gardens, pastures — and when to consider something else.",
    intro: "10-10-10 is the workhorse of balanced fertilizers — equal parts nitrogen, phosphorus, and potassium. It's a dependable default for a lot of everyday feeding.",
    blocks: [
      { t: "h2", text: "Good fits for 10-10-10" },
      { t: "ul", items: [
        "Lawns and gardens that want an even, all-purpose feeding.",
        "General pasture maintenance where a soil test doesn't call for something targeted.",
        "Growers who want one simple, reliable product to keep on hand.",
      ] },
      { t: "h2", text: "When to consider something else" },
      { t: "p", text: "If a soil test shows you're only short on one nutrient — say potassium — a targeted product like 0-0-60 is more economical. If you're feeding a specific crop hard, a custom blend can hit the mark more precisely than an even analysis." },
      { t: "note", text: "How Rodgers helps: we carry 10-10-10 (and a premium 10-10-10) in bags and bulk, and we can blend something more targeted if your soil test calls for it." },
    ],
    faqs: [
      { q: "Is 10-10-10 good for gardens?", a: "Yes — it's a common, balanced choice for general garden feeding." },
      { q: "Is 10-10-10 enough for pasture?", a: "Often for general maintenance, but a soil test may point you to a more targeted blend for best results." },
    ],
    related: [{ label: "Understanding 17-17-17", href: "/resources/understanding-17-17-17" }, { label: "How to Choose Potash", href: "/resources/how-to-choose-potash" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "understanding-17-17-17", center: "Fertilizer",
    title: "Understanding 17-17-17 Fertilizer",
    metaTitle: "Understanding 17-17-17 Fertilizer",
    metaDescription: "17-17-17 is a higher-analysis balanced blend. What that means, and when the extra concentration is worth it.",
    intro: "17-17-17 is a balanced blend like 10-10-10, but more concentrated — you get more nutrient per pound of product.",
    blocks: [
      { t: "h2", text: "What the higher numbers mean" },
      { t: "p", text: "Because 17-17-17 is 17% of each nutrient (vs. 10%), a bag delivers more N, P, and K. That means you can put down fewer pounds per acre to hit the same target, which can reduce handling and freight on larger jobs." },
      { t: "h2", text: "When to reach for it" },
      { t: "ul", items: [
        "You want a balanced feed but prefer a more concentrated product.",
        "You're covering acreage and want to move fewer pounds for the same nutrients.",
        "Your soil test supports an even, higher-analysis application.",
      ] },
      { t: "note", text: "How Rodgers helps: we carry 17-17-17 in bags, pallets, totes, and bulk — pickup or delivery. Not sure between 10-10-10 and 17-17-17? Call us." },
    ],
    faqs: [
      { q: "Is 17-17-17 better than 10-10-10?", a: "It's more concentrated, not inherently better — you use less of it. The right choice depends on your soil test and your rate." },
      { q: "Can I use 17-17-17 on a garden?", a: "Yes, at a lower rate than a less-concentrated product — follow soil-test guidance." },
    ],
    related: [{ label: "When to Use 10-10-10", href: "/resources/when-to-use-10-10-10" }, { label: "Understanding N-P-K", href: "/resources/understanding-npk" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "how-to-choose-potash", center: "Fertilizer",
    title: "How to Choose Potash Fertilizer (0-0-60)",
    metaTitle: "How to Choose Potash Fertilizer (0-0-60)",
    metaDescription: "What potash (0-0-60) does, when your soil needs it, and how it fits alongside balanced blends.",
    intro: "Potash — commonly sold as 0-0-60 — is a targeted source of potassium. It's what you reach for when a soil test says potassium is the nutrient you're short on.",
    blocks: [
      { t: "h2", text: "What potassium does" },
      { t: "p", text: "Potassium supports overall plant health, stress and drought tolerance, and winter hardiness. Hay in particular removes a lot of potassium, so hay ground often needs it built back." },
      { t: "h2", text: "When 0-0-60 makes sense" },
      { t: "ul", items: [
        "A soil test shows potassium is low while N and P are adequate.",
        "You're replacing potassium removed by repeated hay cuttings.",
        "You want to target one nutrient economically instead of a full balanced blend.",
      ] },
      { t: "note", text: "How Rodgers helps: we carry 0-0-60 in bags and bulk, and we can fold potassium into a custom blend if your soil test calls for a mix." },
    ],
    faqs: [
      { q: "What is 0-0-60?", a: "Muriate of potash — a fertilizer that is 60% potassium (K) and no nitrogen or phosphorus." },
      { q: "Why does hay ground need potash?", a: "Hay removes large amounts of potassium each cutting, so it often has to be replaced to keep yields up." },
    ],
    related: [{ label: "Fertilizer for Hay Fields", href: "/fertilizer/hay-fields" }, { label: "Understanding N-P-K", href: "/resources/understanding-npk" }],
    cta: ctaQuote, updated: D,
  },
  {
    slug: "choosing-a-rotary-cutter", center: "Equipment",
    title: "Choosing a Rotary Cutter (Bush Hog)",
    metaTitle: "Choosing a Rotary Cutter — Bush Hog Buying Guide",
    metaDescription: "How to pick the right rotary cutter width and type for your tractor and your land — a practical buyer's guide.",
    intro: "The right rotary cutter comes down to two things: what your tractor can handle, and what you're cutting. Get those right and the machine will serve you for years.",
    blocks: [
      { t: "h2", text: "Start with your tractor" },
      { t: "p", text: "Cutter width should match your tractor's horsepower and hydraulics. Too wide for your tractor and you'll bog down or wear the machine; too narrow and you'll spend all day cutting. Match the cutter's rated horsepower range to your tractor before anything else." },
      { t: "h2", text: "Match the cutter to the job" },
      { t: "ul", items: [
        "4–6 ft cutters: compact and utility tractors, yards, trails, and smaller plots.",
        "7–10 ft cutters: mid-size tractors and larger pastures and fields.",
        "12–20 ft (multi-spindle): big acreage where you need to cover ground fast.",
      ] },
      { t: "p", text: "Also consider material: light grass vs. heavy brush and saplings call for different deck builds and blade setups. Single-spindle cutters suit narrower widths; multi-spindle machines handle the wide widths." },
      { t: "note", text: "How Rodgers helps: we're an authorized Bush Hog dealer. Tell us your tractor horsepower and what you're cutting, and we'll point you to the right cutter and confirm the details." },
    ],
    faqs: [
      { q: "What size rotary cutter do I need?", a: "Match the cutter's rated horsepower range to your tractor first, then choose width based on your acreage and material. We'll help you confirm the fit." },
      { q: "Single-spindle or multi-spindle?", a: "Single-spindle suits narrower cutters; multi-spindle handles the wide widths and heavier material on larger acreage." },
    ],
    related: [{ label: "Bush Hog Sizing Guide", href: "/resources/bush-hog-sizing-guide" }, { label: "Rotary Cutters", href: "/equipment/rotary-cutters" }],
    cta: { label: "Request Equipment Info", href: "/request-a-quote?form=equipment" }, updated: D,
  },
  {
    slug: "bush-hog-sizing-guide", center: "Equipment",
    title: "Bush Hog Sizing Guide: Cutter Width by Tractor Horsepower",
    metaTitle: "Bush Hog Sizing Guide — Cutter Width by Horsepower",
    metaDescription: "A simple framework for matching rotary cutter width to tractor horsepower, so you don't over- or under-buy.",
    intro: "The most common sizing mistake is buying a cutter your tractor can't comfortably run. Here's how to think about the match.",
    blocks: [
      { t: "p", text: "Every rotary cutter has a rated horsepower range and a minimum tractor requirement. Staying inside that range protects both the tractor and the cutter and keeps you cutting cleanly instead of bogging down." },
      { t: "ul", items: [
        "Check your tractor's PTO horsepower — not just engine horsepower.",
        "Confirm the cutter's rated horsepower range fits your tractor.",
        "Heavier material (brush, saplings) needs more power for the same width.",
        "Consider lift capacity — wider, heavier cutters need a tractor that can lift them.",
      ] },
      { t: "note", text: "How Rodgers helps: bring us your tractor's make, model, and horsepower and what you're cutting — we'll match you to the right Bush Hog cutter." },
    ],
    faqs: [
      { q: "Do I go by engine or PTO horsepower?", a: "PTO horsepower is what turns the cutter, so match to that and the cutter's rated range." },
      { q: "Can a small tractor run a big cutter?", a: "Not comfortably — an undersized tractor bogs down and wears faster. Match the cutter to what your tractor can handle." },
    ],
    related: [{ label: "Choosing a Rotary Cutter", href: "/resources/choosing-a-rotary-cutter" }, { label: "Cutter Safety Guide", href: "/resources/cutter-safety-guide" }],
    cta: { label: "Request Equipment Info", href: "/request-a-quote?form=equipment" }, updated: D,
  },
  {
    slug: "great-plains-drill-guide", center: "Equipment",
    title: "Great Plains No-Till Drill Guide",
    metaTitle: "Great Plains No-Till Drill Guide",
    metaDescription: "What a no-till drill does, why growers use one, and how to think about seeding with a Great Plains drill.",
    intro: "A no-till drill lets you plant directly into existing residue without conventional tillage — saving passes, protecting soil, and holding moisture.",
    blocks: [
      { t: "h2", text: "Why no-till" },
      { t: "ul", items: [
        "Fewer trips across the field and less fuel and time.",
        "Residue and reduced tillage help hold soil and moisture.",
        "Good seed-to-soil contact for even establishment.",
      ] },
      { t: "p", text: "No-till drills like the Great Plains 1006NT place seed at a consistent depth through residue, which is a big advantage for pasture renovation, cover crops, and food plots where you don't want to tear up the ground." },
      { t: "note", text: "How Rodgers helps: we carry Great Plains equipment. Tell us your acreage and what you're seeding and we'll help you confirm the right setup and availability." },
    ],
    faqs: [
      { q: "What is a no-till drill used for?", a: "Planting seed directly into existing residue without full tillage — common for pasture, cover crops, and food plots." },
      { q: "Do you carry Great Plains drills?", a: "We carry Great Plains equipment — ask us about current availability and configuration for your operation." },
    ],
    related: [{ label: "Wildlife Planting Guide", href: "/resources/wildlife-planting-guide" }, { label: "Great Plains Equipment", href: "/equipment/great-plains" }],
    cta: { label: "Request Equipment Info", href: "/request-a-quote?form=equipment" }, updated: D,
  },
  {
    slug: "equipment-maintenance-checklist", center: "Equipment",
    title: "Rotary Cutter & Equipment Maintenance Checklist",
    metaTitle: "Equipment Maintenance Checklist (Printable)",
    metaDescription: "A printable maintenance checklist for rotary cutters and farm implements — keep your equipment running and safe.",
    intro: "A few minutes of maintenance saves expensive downtime and keeps your machine safe. Print this and run through it at the start of each season and periodically during use. Always follow your equipment's operator manual.",
    blocks: [
      { t: "h2", text: "Before each season" },
      { t: "ul", items: [
        "Grease all fittings, including gearbox and driveline per the manual.",
        "Check gearbox oil level and look for leaks.",
        "Inspect blades for wear, cracks, and secure mounting; replace as needed.",
        "Check driveline, shields, and safety chains for wear or damage.",
        "Inspect belts and pulleys (finishing mowers) for wear and tension.",
        "Check tire/wheel condition on trailing cutters.",
      ] },
      { t: "h2", text: "During the season" },
      { t: "ul", items: [
        "Grease fittings on schedule.",
        "Keep blades sharp and balanced; watch for vibration.",
        "Confirm all shields and guards are in place before every use.",
        "Clean off buildup that can hide damage or unbalance the blades.",
      ] },
      { t: "note", text: "Need a part? Send us your model and part number (a photo helps) and we'll get you the right one. This checklist is general guidance — your operator manual is the authority for your machine." },
    ],
    faqs: [
      { q: "How often should I grease a rotary cutter?", a: "Follow your operator manual — many fittings are greased on an hourly or per-use schedule, and the gearbox on its own interval." },
      { q: "When should I replace cutter blades?", a: "When they're worn, cracked, bent, or badly dull — damaged blades cut poorly and are a safety risk." },
    ],
    related: [{ label: "Cutter Safety Guide", href: "/resources/cutter-safety-guide" }, { label: "Bush Hog Parts", href: "/parts/bush-hog" }],
    cta: { label: "Request a Part", href: "/parts/request-a-part" }, updated: D,
  },
  {
    slug: "cutter-safety-guide", center: "Equipment",
    title: "Rotary Cutter Safety Guide",
    metaTitle: "Rotary Cutter Safety Guide",
    metaDescription: "Core safety practices for operating a rotary cutter — shields, bystanders, and driveline care. Always follow your operator manual.",
    intro: "Rotary cutters throw debris with real force. A few habits keep you and everyone around you safe. Your operator manual always takes precedence over general guidance.",
    blocks: [
      { t: "ul", items: [
        "Keep all shields, guards, and deflectors in place and in good condition.",
        "Keep bystanders well clear — thrown objects can travel a long way.",
        "Stop the PTO and engine before inspecting, unclogging, or servicing.",
        "Maintain the driveline and shields; never operate with a damaged shield.",
        "Watch for hidden hazards — stumps, rocks, wire — in tall material.",
        "Use the tractor's ROPS and seatbelt and mind slopes.",
      ] },
      { t: "note", text: "This is general guidance only. Read and follow the operator manual for your specific cutter and tractor." },
    ],
    faqs: [
      { q: "How far can a rotary cutter throw debris?", a: "Potentially a long distance with force — keep bystanders well clear and shields in place at all times." },
      { q: "Can I unclog a cutter while it's running?", a: "No — stop the PTO and engine first. Never service a cutter that's running." },
    ],
    related: [{ label: "Equipment Maintenance Checklist", href: "/resources/equipment-maintenance-checklist" }, { label: "Rotary Cutters", href: "/equipment/rotary-cutters" }],
    cta: { label: "Request Equipment Info", href: "/request-a-quote?form=equipment" }, updated: D,
  },
  {
    slug: "farm-implement-buyer-guide", center: "Equipment",
    title: "Farm Implement Buyer's Guide",
    metaTitle: "Farm Implement Buyer's Guide",
    metaDescription: "How to choose implements that fit your tractor and your tasks — compatibility, sizing, and support.",
    intro: "Implements turn a tractor into a whole toolkit. Choosing well means matching each tool to your tractor and the job it needs to do.",
    blocks: [
      { t: "h2", text: "What to check before you buy" },
      { t: "ul", items: [
        "Tractor compatibility — hitch category, PTO, and hydraulics.",
        "Horsepower and lift capacity for the implement's size and weight.",
        "The specific task — cutting, tilling, seeding, moving material.",
        "Parts and service support down the road.",
      ] },
      { t: "note", text: "How Rodgers helps: tell us your tractor and what you're trying to accomplish, and we'll help you match the right implement and confirm compatibility." },
    ],
    faqs: [
      { q: "Will an implement fit any tractor?", a: "No — check hitch category, PTO, hydraulics, and horsepower. Tell us your tractor and we'll confirm compatibility." },
      { q: "New or used implements?", a: "Both can be good value — the key is matching the tool to your tractor and task, and having parts support." },
    ],
    related: [{ label: "Implements", href: "/equipment/implements" }, { label: "Choosing a Rotary Cutter", href: "/resources/choosing-a-rotary-cutter" }],
    cta: { label: "Request Equipment Info", href: "/request-a-quote?form=equipment" }, updated: D,
  },
  {
    slug: "ryegrass-planting-guide", center: "Seed",
    title: "Annual Ryegrass Planting Guide (South Carolina)",
    metaTitle: "Annual Ryegrass Planting Guide (SC)",
    metaDescription: "When and how to plant annual ryegrass in South Carolina for winter forage and cover — general timing and establishment tips.",
    intro: "Annual ryegrass is a dependable cool-season grass for winter grazing, cover, and overseeding. In South Carolina it's typically planted in fall.",
    blocks: [
      { t: "h2", text: "Timing" },
      { t: "p", text: "In South Carolina, annual ryegrass is generally planted in the fall — roughly September into November — so it establishes before cold weather and provides forage or cover through the cool season." },
      { t: "h2", text: "Establishment basics" },
      { t: "ul", items: [
        "Prepare a firm seedbed or drill into existing residue for good seed-to-soil contact.",
        "Follow recommended seeding rates for grazing vs. cover.",
        "A soil test tells you whether to lime and what to feed at establishment.",
      ] },
      { t: "note", text: "How Rodgers helps: we carry annual ryegrass (in 50-lb bags) along with the lime and fertilizer to get it established. Ask us what fits your fields." },
    ],
    faqs: [
      { q: "When do you plant ryegrass in SC?", a: "Typically fall — roughly September through November — so it establishes before winter." },
      { q: "Do you carry ryegrass seed?", a: "Yes — annual ryegrass in 50-lb bags, plus the lime and fertilizer to establish it." },
    ],
    related: [{ label: "SC Seeding Schedule", href: "/resources/sc-seeding-schedule" }, { label: "Pasture & Grass Seed", href: "/seed-farm-supplies/pasture-seed" }],
    cta: { label: "Check Seed Availability", href: "/contact" }, updated: D,
  },
  {
    slug: "millet-planting-guide", center: "Seed",
    title: "Browntop Millet Planting Guide",
    metaTitle: "Browntop Millet Planting Guide",
    metaDescription: "Browntop millet is a fast warm-season grass great for dove fields and quick cover. How and when to plant it.",
    intro: "Browntop millet is a fast-growing, warm-season annual grass — a favorite for dove fields, quick cover, and wildlife plots. It grows 2–3 feet tall and matures quickly.",
    blocks: [
      { t: "h2", text: "Why growers use it" },
      { t: "ul", items: [
        "Quick to establish and mature — good for dove and quail plots.",
        "Warm-season cover and forage.",
        "Simple to plant on a prepared seedbed.",
      ] },
      { t: "p", text: "Plant browntop millet in the warm season once soils have warmed. Time the planting so seed heads mature when you want them — for example, ahead of dove season for a dove field." },
      { t: "note", text: "How Rodgers helps: we carry browntop millet and can pair it with the right fertility. Tell us your plot and timing and we'll help you plan." },
    ],
    faqs: [
      { q: "What is browntop millet good for?", a: "A fast warm-season grass often planted for dove and quail fields and quick cover; it grows 2–3 feet tall." },
      { q: "When do I plant it for dove season?", a: "Plant so seed heads mature ahead of the season — timing depends on your area and goals; we'll help you back into a planting date." },
    ],
    related: [{ label: "Food Plot Calendar", href: "/resources/food-plot-calendar" }, { label: "Food-Plot Seed", href: "/seed-farm-supplies/food-plot-seed" }],
    cta: { label: "Check Seed Availability", href: "/contact" }, updated: D,
  },
  {
    slug: "food-plot-calendar", center: "Seed",
    title: "South Carolina Food Plot Calendar",
    metaTitle: "South Carolina Food Plot Calendar",
    metaDescription: "A season-by-season framework for planning food plots in South Carolina — spring and fall plantings, soil prep, and fertility.",
    intro: "Great food plots come from planning the season backward from when you want them producing. Here's a simple South Carolina framework.",
    blocks: [
      { t: "h2", text: "Spring & summer plots" },
      { t: "ul", items: [
        "Warm-season plantings (like millet) go in once soils warm.",
        "Prep the seedbed and address lime and fertility before planting.",
        "Time fast plots (dove fields) so they mature for your season.",
      ] },
      { t: "h2", text: "Fall plots" },
      { t: "ul", items: [
        "Cool-season plantings go in late summer into fall.",
        "Lime is best applied ahead of time so pH is corrected.",
        "Feed at planting based on a soil test for strong establishment.",
      ] },
      { t: "note", text: "How Rodgers helps: seasonal food-plot seed, fertilizer, and lime — with the local know-how of a Saluda business that's served hunters and growers since 1976." },
    ],
    faqs: [
      { q: "When should I plant fall food plots?", a: "Late summer into fall for cool-season plantings — lime ahead of time and feed at planting per a soil test." },
      { q: "Do you carry food plot seed?", a: "Yes — seasonal food-plot seed plus the fertilizer and lime to make it produce." },
    ],
    related: [{ label: "Wildlife Planting Guide", href: "/resources/wildlife-planting-guide" }, { label: "Food-Plot Seed", href: "/seed-farm-supplies/food-plot-seed" }],
    cta: { label: "Check Seed Availability", href: "/contact" }, updated: D,
  },
  {
    slug: "wildlife-planting-guide", center: "Seed",
    title: "Wildlife Planting Guide",
    metaTitle: "Wildlife Planting Guide",
    metaDescription: "Planting for deer, dove, and quail — matching seed and fertility to the wildlife you want to attract and hold.",
    intro: "Planting for wildlife is planting with a purpose — the right seed, in the right season, with the fertility to make it productive.",
    blocks: [
      { t: "ul", items: [
        "Deer: cool-season plots (fall) and warm-season forage; soil prep and fertility matter.",
        "Dove: fast warm-season grasses like browntop millet timed to the season.",
        "Quail: cover and food-producing plantings.",
      ] },
      { t: "p", text: "Whatever you're planting for, a soil test and the right lime and fertilizer make the difference between a plot that struggles and one that produces. Match the seed to the season and the species." },
      { t: "note", text: "How Rodgers helps: we've helped Saluda-area hunters plan food plots for decades — seed, fertilizer, and lime under one roof." },
    ],
    faqs: [
      { q: "What should I plant for deer?", a: "A mix of cool-season fall plots and warm-season forage, with soil prep and fertility to match — we'll help you plan by season." },
      { q: "What attracts dove?", a: "Fast warm-season grasses like browntop millet, timed so seed heads mature for the season." },
    ],
    related: [{ label: "Food Plot Calendar", href: "/resources/food-plot-calendar" }, { label: "Millet Planting Guide", href: "/resources/millet-planting-guide" }],
    cta: { label: "Check Seed Availability", href: "/contact" }, updated: D,
  },
  {
    slug: "sc-seeding-schedule", center: "Seed",
    title: "South Carolina Seeding Schedule (General)",
    metaTitle: "South Carolina Seeding Schedule",
    metaDescription: "A general season-by-season seeding framework for South Carolina — cool- vs. warm-season plantings for forage, cover, and plots.",
    intro: "Seeding success is mostly about matching the plant to its season. Here's a general South Carolina framework to plan around.",
    blocks: [
      { t: "h2", text: "Cool-season (fall planting)" },
      { t: "ul", items: [
        "Annual ryegrass and other cool-season forages: roughly September–November.",
        "Fall food plots: late summer into fall.",
        "Lime ahead of planting so pH is corrected in time.",
      ] },
      { t: "h2", text: "Warm-season (spring/summer planting)" },
      { t: "ul", items: [
        "Warm-season grasses and millet: once soils warm in spring/summer.",
        "Summer cover and dove fields: timed to your goals.",
      ] },
      { t: "note", text: "Local conditions and each year's weather shift these windows — call us and we'll help you time it for your fields. Rodgers has served Saluda-area growers since 1976." },
    ],
    faqs: [
      { q: "When is fall seeding in SC?", a: "Roughly September–November for cool-season forages; fall food plots go in late summer into fall." },
      { q: "When can I plant warm-season grasses?", a: "Once soils warm in spring and into summer — exact timing shifts with the year's weather." },
    ],
    related: [{ label: "Ryegrass Planting Guide", href: "/resources/ryegrass-planting-guide" }, { label: "Food Plot Calendar", href: "/resources/food-plot-calendar" }],
    cta: { label: "Check Seed Availability", href: "/contact" }, updated: D,
  },
  {
    slug: "pasture-planning-worksheet", center: "Fertilizer",
    title: "Pasture Planning Worksheet (Printable)",
    metaTitle: "Pasture Planning Worksheet (Printable)",
    metaDescription: "A free printable worksheet to plan pasture fertility — acreage, soil test, lime, fertilizer, and timing in one place.",
    intro: "Print this worksheet and fill it in before the season. Bring it to us and we'll turn it into a blend and a plan. (This is a planning aid — a soil test is the foundation of any fertility plan.)",
    blocks: [
      { t: "h2", text: "Fill in your fields" },
      { t: "ul", items: [
        "Field name / acreage: __________",
        "Forage type (fescue, bermuda, bahia, mixed): __________",
        "Most recent soil test date: __________",
        "Soil pH (from test): __________  → lime needed? Y / N, how much: __________",
        "Target nutrients (from test): N ____  P ____  K ____",
        "Planned blend (standard or custom): __________",
        "Packaging (bag / pallet / tote / bulk): __________",
        "Pickup or delivery: __________   Spreading? Y / N",
        "Application timing (spring / summer / fall): __________",
      ] },
      { t: "note", text: "Bring this to Rodgers Fertilizer in Saluda (or send it with a quote request) and we'll build the blend and help you schedule it." },
    ],
    faqs: [
      { q: "What do I need before planning pasture fertility?", a: "A current soil test is the foundation — it tells you your pH (lime need) and nutrient levels (fertilizer need)." },
      { q: "Can you help me fill this out?", a: "Yes — bring your soil test and acreage and we'll help you complete the plan and build the blend." },
    ],
    related: [{ label: "When to Fertilize Pasture", href: "/resources/when-to-fertilize-pasture" }, { label: "Lime Calculator", href: "/tools" }],
    cta: { label: "Request a Pasture Quote", href: "/request-a-quote?form=fertilizer" }, updated: D,
  },
  {
    slug: "hay-field-improvement-checklist", center: "Fertilizer",
    title: "Hay Field Improvement Checklist (Printable)",
    metaTitle: "Hay Field Improvement Checklist (Printable)",
    metaDescription: "A printable checklist to improve hay-field yields — soil test, lime, replace removed nutrients, and timing.",
    intro: "Hay pulls a lot of nutrients off your fields every cutting. This checklist helps you replace what's removed and keep yields up. Print it and work through it each season.",
    blocks: [
      { t: "h2", text: "Every season" },
      { t: "ul", items: [
        "Pull or review a current soil test.",
        "Correct pH with lime if the test calls for it (apply early — lime is slow).",
        "Replace potassium removed by cuttings (hay removes a lot of K).",
        "Match nitrogen and phosphorus to the test and your yield goals.",
        "Plan timing around active growth and cutting schedule.",
        "Consider splitting applications to reduce loss and steady growth.",
      ] },
      { t: "note", text: "How Rodgers helps: hay-field blends, potash (0-0-60), and lime — bagged, totes, or bulk, with delivery. Bring your soil test and we'll size it to your fields." },
    ],
    faqs: [
      { q: "Why do hay fields need so much potash?", a: "Each cutting removes large amounts of potassium, so it usually has to be replaced to maintain yields." },
      { q: "How do I improve a tired hay field?", a: "Start with a soil test, correct pH with lime, and replace removed nutrients — especially potassium — on the right schedule." },
    ],
    related: [{ label: "How to Choose Potash", href: "/resources/how-to-choose-potash" }, { label: "Hay-Field Fertilizer", href: "/fertilizer/hay-fields" }],
    cta: { label: "Request a Hay-Field Quote", href: "/request-a-quote?form=fertilizer" }, updated: D,
  },
];
