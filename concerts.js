/*
  ===========================================================
   CONCERTS: edit this list, save, and push. That's it.
  ===========================================================
  Add one block per concert. The site sorts them automatically:
  concerts with a date today or later go under "Upcoming",
  older ones go under "Past".

  Fields:
    date    "YYYY-MM-DD"                    (required)
    time    "19:30"                         (optional)
    title   "Concert title"                 (required)
    venue   "Venue name"                    (required)
    city    "Oslo"                          (optional)
    note    "Short description"             (optional, can be { en: "...", no: "..." })
    link    "https://..."                   (optional: tickets or info page)
    linkLabel  "Tickets"                    (optional, default "More info")
    tag     "Jazz"                          (optional small label)

  Copy this template to add a new concert:

  {
    date: "2026-01-01",
    time: "19:30",
    title: "Concert title",
    venue: "Venue",
    city: "City",
    note: { en: "Short description", no: "Kort beskrivelse" },
    link: "https://example.com",
    linkLabel: "Tickets",
    tag: "Jazz"
  },
*/
window.NH_CONCERTS = [
  {
    date: "2025-10-30",
    time: "18:00",
    title: "Nye røtter",
    venue: "Underhuset, Bærum Kulturhus",
    city: "Sandvika",
    note: {
      en: "Prize-winner concert and world premiere at Bærum Jazz Festival 2025. Old Norwegian folk texts and original music, with a seven-piece band.",
      no: "Prisvinnerkonsert og urfremføring under Bærum Jazzfestival 2025. Gamle norske folketekster og egen musikk, med sju musikere."
    },
    link: "https://www.baerumkulturhus.no/arkiv/2025-host/nikolai-hansli-nye-rotter/",
    linkLabel: { en: "Read more", no: "Les mer" },
    tag: "Jazz · Folk"
  }

  // ← add new concerts above this line (remember the comma after the previous one)
];
