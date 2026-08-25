export const company = {
  name: "TheLogiserve",
  tagline: "Cargo does not move by luck. It moves by a plan.",
  email: "hello@thelogiserve.com",
  phone: "+1 (800) 555-0148",
  location: "Global desks · Ports, airports, and inland hubs",
};

export const nav = [
  { href: "/", label: "Briefing" },
  { href: "/#services", label: "Services" },
  { href: "/#choose", label: "Choose a mode" },
  { href: "/#glossary", label: "Language" },
];

export const services = [
  {
    slug: "air-freight",
    kicker: "Speed",
    title: "Air freight",
    short: "Days, not weeks — for cargo that cannot wait.",
    summary:
      "The fastest commercial way to move goods internationally. Air is priced by weight and cube, so it rewards dense, urgent, or high-value cargo.",
    bestFor: [
      "Product launches and replenishment that would otherwise stock out",
      "Spare parts that keep a factory, hospital, or fleet running",
      "Samples, medical, and other high-value lightweight cargo",
      "Split moves: the urgent cartons fly, the balance sails",
    ],
    howItWorks: [
      "Cargo is booked on an airline or consolidator against a flight cutoff.",
      "An air waybill (AWB) becomes the contract of carriage.",
      "Advance screening data is filed before departure.",
      "On arrival, customs can release clean entries in hours if documents were ready before wheels-down.",
    ],
    facts: [
      { label: "Typical transit", value: "3–7 days" },
      { label: "Priced by", value: "Chargeable kg" },
      { label: "Key document", value: "Air waybill" },
      { label: "Clearance clock", value: "Hours, not days" },
    ],
    watchouts:
      "Air is unforgiving of paperwork. Because the plane arrives so quickly, a missing invoice or vague product description creates storage and delay almost immediately. Book with the real ready date — missed cutoffs do not wait.",
  },
  {
    slug: "ocean-freight",
    kicker: "Scale",
    title: "Ocean freight",
    short: "The cheapest way to move volume across oceans.",
    summary:
      "Most of the world’s goods by volume still travel by sea. A container is the workhorse of planned inventory: slower than air, far cheaper per cubic meter.",
    bestFor: [
      "Regular replenishment and seasonal inventory with lead time",
      "Heavy, bulky, or dense cargo where air would be uneconomic",
      "Full-container programs and growing LCL volumes",
      "Multimodal plans that finish by rail or truck inland",
    ],
    howItWorks: [
      "FCL (full container load): your cargo occupies a 20' or 40' box. Fewer touches, better security.",
      "LCL (less than container load): your cargo shares a container. You pay for space used; extra time for stuffing and stripping.",
      "The bill of lading is the title and contract document for the voyage.",
      "Destination work starts before the vessel berths: customs, terminal free time, and inland pickup.",
    ],
    facts: [
      { label: "Typical transit", value: "2–6 weeks" },
      { label: "Priced by", value: "Container or CBM" },
      { label: "Key document", value: "Bill of lading" },
      { label: "Watch the clock", value: "Demurrage & detention" },
    ],
    watchouts:
      "Ocean savings disappear if the box sits. Demurrage is the terminal’s charge after free time; detention is the carrier’s charge if you keep the container. Plan drayage and warehouse appointments before arrival, not after.",
  },
  {
    slug: "surface-transportation",
    kicker: "Reach",
    title: "Surface transportation",
    short: "Trucks and rail that start, connect, and finish the move.",
    summary:
      "Almost every international shipment still needs land. Surface is first mile, last mile, domestic distribution, and the short haul from port or rail ramp called drayage.",
    bestFor: [
      "Door pickup at a factory and delivery to a warehouse or store",
      "Port and rail-ramp drayage on a tight free-time clock",
      "Regional distribution where air or ocean is unnecessary",
      "Intermodal: ocean or rail for the long haul, truck for the ends",
    ],
    howItWorks: [
      "FTL (full truckload): exclusive trailer, direct, fewer handlings — best above roughly seven pallets or 15,000 lb.",
      "LTL (less than truckload): share trailer space; pay for your portion; extra terminal touches.",
      "Rail moves high volume over long land distances with lower fuel use per ton-mile and more stable schedules.",
      "Drayage is the specialist short haul between a marine terminal or rail ramp and a nearby warehouse.",
    ],
    facts: [
      { label: "Road options", value: "FTL · LTL · dray" },
      { label: "Rail strength", value: "Distance + volume" },
      { label: "Role", value: "First and last mile" },
      { label: "Pairing", value: "Ocean + rail + truck" },
    ],
    watchouts:
      "Surface fails on appointments, chassis, and capacity — not just miles. A vessel that arrives on time still racks up charges if the truck cannot pick up. Book inland capacity with the same seriousness as the ocean booking.",
  },
  {
    slug: "freight-forwarding",
    kicker: "Control",
    title: "Freight forwarding",
    short: "One conductor for every carrier, document, and handoff.",
    summary:
      "A forwarder rarely owns the ship or the aircraft. The value is designing the route, booking space, lining up documents, and staying with the cargo when something slips.",
    bestFor: [
      "Importers and exporters who do not want to assemble carriers themselves",
      "Shipments that mix air, ocean, truck, and rail",
      "Programs that need supplier chase, visibility, and exception handling",
      "Teams that want a single plan instead of five disconnected vendors",
    ],
    howItWorks: [
      "Plan: cargo, Incoterms, ready date, constraints, and the business priority (cost, speed, or certainty).",
      "Quote and book: compare modes, then reserve space against real cutoffs.",
      "Document: commercial invoice, packing list, bill of lading or air waybill, certificates.",
      "Execute: origin pickup, main carriage, customs handoff, inland delivery, and exception management.",
    ],
    facts: [
      { label: "Model", value: "Asset-light coordinator" },
      { label: "Owns", value: "The plan, not the fleet" },
      { label: "Job", value: "Handoffs without gaps" },
      { label: "Outcome", value: "Landed cost + time" },
    ],
    watchouts:
      "The cheapest quote is often incomplete. Compare what is included: origin fees, fuel, destination terminal charges, customs, and inland. A low ocean rate with surprise destination charges is not a low move.",
  },
  {
    slug: "customs-clearance",
    kicker: "Entry",
    title: "Customs clearance",
    short: "The legal door. Goods do not move inland until it opens.",
    summary:
      "Customs clearance is declaring what the goods are, what they are worth, where they came from, and what duties apply — then paying and waiting for release. It is required on commercial imports regardless of mode.",
    bestFor: [
      "Any cross-border shipment that must enter commerce legally",
      "Products that need licenses, origin claims, or partner-agency review",
      "Air cargo that will arrive before a slow paperwork cycle can catch up",
      "Ocean boxes where an exam or hold would burn free time",
    ],
    howItWorks: [
      "Classify each product on the tariff schedule (HS / HTS) — the code drives duty and restrictions.",
      "File entry data before arrival so the agency can review while the cargo is still in transit.",
      "Present the commercial invoice, packing list, and transport document; add certificates when required.",
      "Pay duties and taxes. Clean, low-risk entries release; others go to document review or physical exam.",
    ],
    facts: [
      { label: "Air, clean entry", value: "Often under 48 hrs" },
      { label: "Ocean, automated", value: "1–3 business days" },
      { label: "If examined", value: "Days to weeks" },
      { label: "Usual filer", value: "Licensed broker" },
    ],
    watchouts:
      "Most holds are paperwork, not smuggling. Wrong tariff codes, undervaluation, missing permits, and vague descriptions (“parts,” “samples”) are the usual causes. File early. Do not wait for the cargo to land.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const journey = [
  {
    n: "01",
    title: "Plan",
    body: "What is moving, when it is ready, who pays for each leg (Incoterms), and whether speed or cost matters more.",
  },
  {
    n: "02",
    title: "Choose the mode",
    body: "Air for urgency, ocean for volume, truck and rail for land. Many shipments use more than one.",
  },
  {
    n: "03",
    title: "Book space",
    body: "Reserve the aircraft, vessel, trailer, or rail slot against the cargo-ready date and carrier cutoff.",
  },
  {
    n: "04",
    title: "Document",
    body: "Invoice, packing list, and the transport contract (air waybill or bill of lading). Accuracy here protects every later step.",
  },
  {
    n: "05",
    title: "Origin pickup",
    body: "First-mile trucking from factory or warehouse to the airport, port, or consolidation dock.",
  },
  {
    n: "06",
    title: "Main carriage",
    body: "The long haul by air, ocean, or a land bridge. This is the part people picture — and only one chapter.",
  },
  {
    n: "07",
    title: "Clear customs",
    body: "Declare, classify, pay, and release. Until this happens, cargo cannot legally leave the terminal.",
  },
  {
    n: "08",
    title: "Deliver inland",
    body: "Drayage, rail, or truck to the warehouse, plant, or customer. Plan this before arrival to avoid storage clocks.",
  },
];

export const comparison = [
  {
    mode: "Air",
    speed: "Days",
    cost: "Highest per kg",
    unit: "Chargeable weight",
    best: "Urgent, high-value, light",
    risk: "Cutoffs and late documents",
  },
  {
    mode: "Ocean",
    speed: "Weeks",
    cost: "Lowest at volume",
    unit: "Container or CBM",
    best: "Planned, heavy, bulky",
    risk: "Port dwell, demurrage",
  },
  {
    mode: "Surface",
    speed: "Hours to a few days",
    cost: "Mid; essential last mile",
    unit: "Truck or rail car",
    best: "Domestic and inland legs",
    risk: "Capacity and appointments",
  },
];

export const glossary = [
  {
    term: "AWB",
    def: "Air waybill — the airline’s contract and tracking document for a flight.",
  },
  {
    term: "B/L",
    def: "Bill of lading — ocean contract of carriage; often also a document of title.",
  },
  {
    term: "FCL / LCL",
    def: "Full vs. less-than container load. Exclusive box versus shared space at sea.",
  },
  {
    term: "FTL / LTL",
    def: "Full vs. less-than truckload. Exclusive trailer versus shared road freight.",
  },
  {
    term: "Incoterms",
    def: "International rules that split cost and risk between seller and buyer (for example EXW, FOB, CIF, DDP).",
  },
  {
    term: "HS / HTS",
    def: "The tariff code that classifies the product and determines duty and restrictions.",
  },
  {
    term: "Drayage",
    def: "Short truck haul between a port or rail ramp and a nearby warehouse.",
  },
  {
    term: "Demurrage",
    def: "Fee when a container stays at the terminal past free time.",
  },
  {
    term: "Detention",
    def: "Fee when you keep the carrier’s container past the allowed off-terminal time.",
  },
  {
    term: "NVOCC",
    def: "Non-vessel operating common carrier — a forwarder that issues its own ocean bills and buys space in bulk.",
  },
  {
    term: "Importer of record",
    def: "The party legally responsible for the customs entry, duties, and accuracy of the declaration.",
  },
  {
    term: "Chargeable weight",
    def: "The greater of actual kilograms or volumetric weight — how airlines bill space, not just mass.",
  },
];

export const mistakes = [
  "Waiting until cargo is packed before asking for routing options",
  "Comparing quotes without checking origin, destination, and inland fees",
  "Writing “parts” or “samples” on the invoice instead of a real product name",
  "Ignoring Incoterms, then discovering the wrong party was meant to clear customs",
  "Planning the ocean move and leaving trucking until the vessel is alongside",
  "Choosing the cheapest transit without a backup if a sailing rolls",
];

export const slides = [
  { id: "cover", label: "Cover" },
  { id: "understand", label: "Understand" },
  { id: "journey", label: "Journey" },
  { id: "services", label: "Services" },
  { id: "air-freight", label: "Air" },
  { id: "ocean-freight", label: "Ocean" },
  { id: "surface-transportation", label: "Surface" },
  { id: "freight-forwarding", label: "Forwarding" },
  { id: "customs-clearance", label: "Customs" },
  { id: "choose", label: "Choose" },
  { id: "glossary", label: "Language" },
  { id: "close", label: "Next" },
] as const;
