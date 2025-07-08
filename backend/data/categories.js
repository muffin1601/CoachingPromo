const categories = [
  {
    category: "Apparel",
    products: [
      { name: "Polo T-Shirts", image: "/assets/polotshirt.png", price: 15.99 },
      { name: "Round Neck T-Shirts", image: "/assets/roundnecktshirt.png", price: 12.99 },
      { name: "Sweatshirts", image: "/assets/sweatshirt1.png", price: 19.99 },
      { name: "Shirts", image: "/assets/formalshirt.png", price: 24.99 },
      { name: "Hoodies-Jackets", image: "/assets/hoodie.png", price: 19.99 },
      { name: "Nehru Jacket", image: "/assets/nehrujacket.png", price: 29.99 },
      { name: "Teacher Jacket", image: "/assets/teacherjacket.png", price: 29.99 },
      { name: "Graduation Hat", image: "/assets/gradcap.png", price: 9.99 },
      { name: "Graduation Gown", image: "/assets/gradgown.png", price: 39.99 },
      { name: "Graduation Stole", image: "/assets/gradstole.png", price: 14.99 },
      { name: "Convocation Sash", image: "/assets/sash.png", price: 12.99 },
      { name: "Graduation Hood", image: "/assets/gradhood.png", price: 19.99 },
      { name: "Graduation Accessories", image: "/assets/gradaccessories.png", price: 19.99 },
      { name: "Graduation Degree Folders", image: "/assets/graddegree.png", price: 9.99 },
      { name: "Kids Graduation Gown & Cap", image: "/assets/kidsgraddress.png", price: 24.99 },
      { name: "Graduation Honor Cords", image: "/assets/honorcards.png", price: 6.99 }
    ]
  },
  {
    category: "Bags",
    products: [
      { name: "Institute Backpack", image: "/assets/institutebag.png", price: 29.99 },
      { name: "Jute Bag", image: "/assets/jutebag.png", price: 9.99 },
      { name: "Messenger Bags", image: "/assets/messengerbag.png", price: 24.99 },
      { name: "Tote Bag", image: "/assets/totebag.png", price: 14.99 },
      { name: "Backpacks", image: "/assets/backpack.png", price: 22.99 },
      { name: "Miscellaneous", image: "/assets/bag2.png", price: 19.99 }
    ]
  },
  {
    category: "Promotional Items",
    products: [
      { name: "Mug", image: "/assets/mug.png", price: 9.99 },
      { name: "Water Bottle", image: "/assets/waterbottle.png", price: 14.99 },
      { name: "Diary Set", image: "/assets/diaryset.png", price: 19.99 },
      { name: "Canopy", image: "/assets/canopy.png", price: 79.99 },
      { name: "Rickshaw Hood", image: "/assets/rickshawhood.png", price: 59.99 },
      { name: "Paper Stand", image: "/assets/paperstand.png", price: 24.99 },
      { name: "Wristbands", image: "/assets/wristbands.png", price: 3.99 },
      { name: "Mobile Stand", image: "/assets/mobilestand.png", price: 5.99 },
      { name: "Custom Flashcards", image: "/assets/flashcards.png", price: 6.99 },
      { name: "Stress Balls", image: "/assets/stressballs.png", price: 4.99 },
      { name: "Wall Clocks", image: "/assets/wallclock.png", price: 15.99 },
      { name: "Table Clock", image: "/assets/tableclock.png", price: 13.99 },
      { name: "Mouse Pad", image: "/assets/mousepad.png", price: 5.99 },
      { name: "Photo Frame", image: "/assets/photoframe.png", price: 8.99 },
      { name: "Magic Cube", image: "/assets/magiccube.png", price: 7.99 },
      { name: "Planner", image: "/assets/planner.png", price: 11.99 }
    ]
  },
  {
    category: "Stationery",
    products: [
      { name: "Table Calendar", image: "/assets/tablecalender.png", price: 6.99 },
      { name: "Wall Calendar", image: "/assets/wallcalender.png", price: 8.99 },
      { name: "Binder Clips", image: "/assets/binderclip.png", price: 6.99 },
      { name: "Pencils", image: "/assets/pencil.png", price: 6.99 },
      { name: "Erasers", image: "/assets/erasor.png", price: 6.99 },
      { name: "Exam Pad", image: "/assets/exampad.png", price: 5.99 },
      { name: "Notebook", image: "/assets/notebook.png", price: 3.99 },
      { name: "Notepad", image: "/assets/notepad.png", price: 2.99 },
      { name: "Highlighters", image: "/assets/highlighter.png", price: 3.99 },
      { name: "Markers", image: "/assets/markers.png", price: 3.99 },
      { name: "Metal Pen", image: "/assets/metalpen.png", price: 7.99 },
      { name: "Plastic Pen", image: "/assets/plasticpen.png", price: 3.49 },
      { name: "File & Folder", image: "/assets/filefolder1.png", price: 6.99 },
      { name: "Kobra File", image: "/assets/kobrafile.png", price: 4.99 },
      { name: "Paper File Folder", image: "/assets/paperfile.png", price: 5.99 },
      { name: "Handbill", image: "/assets/handbill.png", price: 2.99 },
      { name: "Lanyard and ID Card", image: "/assets/lanyardid.png", price: 4.99 },
      { name: "Attendance Registers", image: "/assets/register.png", price: 6.99 }
    ]
  },
  {
    category: "Awards",
    products: [
      { name: "Trophy", image: "/assets/trophy.png", price: 49.99 },
      { name: "Wooden Trophy", image: "/assets/woodentrophy.png", price: 59.99 },
      { name: "Badges", image: "/assets/badges.png", price: 3.99 },
      { name: "Other Awards", image: "/assets/trophy2.png", price: 39.99 }
    ]
  },
  
];

module.exports = categories;
