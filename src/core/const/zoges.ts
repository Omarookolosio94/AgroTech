import { avocado, documentGif, farmer, truck2, warehouse } from "./styling";

export const zogesInfo = {
  services: [
    {
      name: "Logistics",
      pic: truck2,
      summary:
        "We transport farm produce from the farm to the market or final consumer anywhere in the country",
    },
    {
      name: "Crop Cultivation",
      pic: avocado,
      summary:
        "We cultivate a variety of crops, including maize, rice, sorghum, soybeans, and cowpeas.",
    },
    {
      name: "Warehousing as a service (WaaS)",
      pic: warehouse,
      summary:
        "We provide WaaS to farmers and businesses, offering secure and flexible storage solutions for their inventory.",
    },
  ],
  summary:
    "Zoges Agro & Trucking Ventures is a Kaduna-based agriculture and logistics company. We are committed to providing our customers with high-quality products and services at competitive prices.",
  contact: {
    email: "info@zoges.ng",
    address: "198 Kaduna road Kaduna, Nigeria",
    phone: "+234 701 906 9000",
  },
  pitch: {
    summary:
      " We are committed to providing our customers with high-quality products and services at competitive prices. Our team of experienced and knowledgeable staff can help you with all your agricultural, logistics, and warehousing needs.",
    points: [
      {
        name: "Experienced",
        icon: farmer,
      },
      {
        name: "High-quality",
        icon: documentGif,
      },
      {
        name: "Diverse",
        icon: documentGif,
      },
      {
        name: "Knowledgeable staff",
        icon: farmer,
      },
    ],
  },
};
