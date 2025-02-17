export const mushrooms = [
  {
    name: "enoki",
    description: `Enoki symbolizes adaptability and subtle elegance. You have a calm, grounded presence that draws people in. Though reserved at first, you offer quiet wisdom and patience, thriving under pressure. In relationships, your warmth and depth unfold over time, making you a comforting and reliable presence.`,
    match: ["shiitake", "shimeji"],
  },
  {
    name: "shiitake",
    description: `Shiitake represents strength and tradition. You are steady, reliable, and value deep-rooted principles. People turn to you for stability, and you approach change thoughtfully. Your relationships are built on trust and loyalty, and your quiet influence is felt even without seeking the spotlight.`,
    match: ["enoki", "eringi", "kikurage"],
  },
  {
    name: "shimeji",
    description: `Shimeji embodies community and collaboration. You thrive in group settings, drawing energy from teamwork and supporting others. Creative and adaptable, you excel in both individual and collective roles. People appreciate your ideas, and your relationships are built on mutual respect and shared goals.`,
    match: ["enoki", "matsutake"],
  },
  {
    name: "matsutake",
    description: `Matsutake is rare and sophisticated, representing luxury and uniqueness. You have an air of elegance and a refined taste for quality. Though you don’t seek attention, your presence is unforgettable. In relationships, you value loyalty and deep, meaningful connections, holding yourself and others to high standards.`,
    match: ["shimeji", "kikurage"],
  },
  {
    name: "kikurage",
    description: `Kikurage represents flexibility and versatility. You adapt easily to changing environments and handle challenges with grace. Your multifaceted personality surprises others, offering both strength and delicacy. People value your advice, and your quiet influence makes you an important presence in any room.`,
    match: ["matsutake", "shiitake"],
  },
];
