const subproducts = {
   
    Stationery: {
        "Handbill": [
            { name: "Promotional Handbill", image: "/assets/handbill/handbill (1).png", content: "High-quality handbills for promotions and advertisements.", price: "₹299" },
            { name: "Custom Handbill", image: "/assets/handbill/handbill (2).png", content: "Customizable handbills for marketing and branding.", price: "₹349" },
            { name: "Business Handbill", image: "/assets/handbill/handbill (3).png", content: "Ideal for business promotions and campaigns.", price: "₹399" }
        ],
        "Notebook": [
            { name: "Classic Notebook", image: "/assets/notebook/notebook (1).png", content: "Perfect for note-taking, journaling, and writing.", price: "₹499" },
            { name: "Spiral Notebook", image: "/assets/notebook/notebook (2).png", content: "Durable spiral binding for easy flipping.", price: "₹599" },
            { name: "Leather Cover Notebook", image: "/assets/notebook/notebook (3).png", content: "Premium leather cover for a professional look.", price: "₹899" },
            { name: "Hardcover Notebook", image: "/assets/notebook/notebook (4).png", content: "Sturdy hardcover for durability and style.", price: "₹699" },
            { name: "Softcover Notebook", image: "/assets/notebook/notebook (5).png", content: "Lightweight and flexible for everyday use.", price: "₹399" },
            { name: "Custom Printed Notebook", image: "/assets/notebook/notebook (6).png", content: "Personalized notebooks for corporate branding.", price: "₹999" }
        ],
        "Exam Pad": [
            { name: "Standard Exam Pad", image: "/assets/exampad/exampad (1).jpg", content: "Essential exam pad for students and professionals.", price: "₹249" },
            { name: "Hardboard Exam Pad", image: "/assets/exampad/exampad (2).jpg", content: "Durable hardboard for sturdy writing support.", price: "₹349" },
            { name: "A4 Size Exam Pad", image: "/assets/exampad/exampad (3).jpg", content: "Perfect for A4 sheets and documents.", price: "₹299" },
            { name: "Clip Board Exam Pad", image: "/assets/exampad/exampad (4).jpg", content: "Comes with a strong clip to hold papers securely.", price: "₹399" },
            { name: "Luxury Exam Pad", image: "/assets/exampad/exampad (5).jpg", content: "Premium quality for executives and professionals.", price: "₹599" }
        ],
        "File & Folder": [

            { name: "Peeplvalue Laminated Cobra File", image: "/assets/folder/peeplvalue_cobra_file.png", content: "Pack of 12 | 540 GSM FS Size File Binders | Professional File Folders for Certificate Documents & Invoices", price: 15.99 },
            { name: "Peeplvalue A4 Multicolour Cobra File Folder", image: "/assets/folder/peeplvalue_multicolor_cobra.png", content: "Pack of 96 | A4 Size | Ideal for Documents, Files, Certificates & Papers", price: 18.99 },
            { name: "Plastic File Folder", image: "/assets/folder/plastic_file_folder.png", content: "Poly Envelope Expanding File Wallet with Snap Button Closure | Legal Size | 5 Pack | Waterproof Accordion File", price: 12.49 },
            { name: "Transparent Report File Folder", image: "/assets/folder/transparent_report_folder.png", content: "10 Pcs | A4 Paper with Plastic Clipboard Folder | FS Size | Ideal for Certificates & Document Organization", price: 10.99 },
            { name: "Plastic Strip File Folder", image: "/assets/folder/plastic_strip_folder.png", content: "Transparent A4 Sliding Bar Report Covers | Multicolored | Pack of 10", price: 9.99 },
            { name: "Corslet File Folders", image: "/assets/folder/corslet_file_folder.png", content: "A4 Letter Size | 5 Pocket Certificate File Organizer | Portable Expanding File Folder", price: 14.99 },
            { name: "Folder File A4 Size Transparent", image: "/assets/folder/folder_file_a4.png", content: "Clear Document Holder | Paper Holder Organizer | Pack of 12 | Thickness 12C", price: 11.99 },
            { name: "A4 Document Folder", image: "/assets/folder/kobrafile (1).jpg", content: "Ideal for organizing documents in offices and schools.", price: "₹199" },
            { name: "Expandable Folder", image: "/assets/folder/kobrafile (2).jpg", content: "Multiple compartments for better document storage.", price: "₹349" },
            { name: "Button Closure Folder", image: "/assets/folder/kobrafile (3).jpg", content: "Secure button closure to keep documents safe.", price: "₹249" },
            { name: "Leather Office File", image: "/assets/folder/kobrafile (4).jpg", content: "Professional leather finish for executives.", price: "₹799" },
            { name: "Transparent Folder", image: "/assets/folder/kobrafile (5).jpg", content: "See-through folder for quick access to documents.", price: "₹149" },
            { name: "Corporate Document File", image: "/assets/folder/kobrafile (6).jpg", content: "Perfect for corporate meetings and presentations.", price: "₹499" },
            { name: "Premium Executive File", image: "/assets/folder/kobrafile (7).jpg", content: "Luxury finish with a professional touch.", price: "₹899" },
            { name: "Zipper Closure File", image: "/assets/folder/kobrafile (8).jpg", content: "Zipper closure ensures safety and organization.", price: "₹399" },
            { name: "Plastic File Folder", image: "/assets/folder/kobrafile (9).jpg", content: "Lightweight and water-resistant document holder.", price: "₹299" },
            { name: "Portfolio File", image: "/assets/folder/kobrafile (10).jpg", content: "Ideal for job interviews and business presentations.", price: "₹699" },
            { name: "Clip File", image: "/assets/folder/kobrafile (11).jpg", content: "Strong metal clip to hold documents firmly.", price: "₹349" }
        ],
        "Table Calendar": [
            { name: "Classic Table Calendar", image: "/assets/calenders/calender (1).png", content: "Perfect for desks at home or office.", price: "₹249" },
            { name: "Corporate Table Calendar", image: "/assets/calenders/calender (5).png", content: "Professional design for office use.", price: "₹399" },
            { name: "Personalized Table Calendar", image: "/assets/calenders/calender (6).png", content: "Custom printed calendars for branding and gifting.", price: "₹499" }
        ],
        "Wall Calendar": [
            { name: "Scenic Wall Calendar", image: "/assets/calenders/calender (3).png", content: "Beautiful landscapes and sceneries.", price: "₹299" },
            { name: "Corporate Wall Calendar", image: "/assets/calenders/calender (4).png", content: "Minimalistic design for offices and businesses.", price: "₹399" },
            { name: "Customized Wall Calendar", image: "/assets/calenders/calender (2).png", content: "Personalized branding for companies.", price: "₹499" }
        ],
        "Lanyard & ID Cards": [
            { name: "Printed Lanyard", image: "/assets/lanyard/lanyard (1).png", content: "Durable printed lanyards for employees and students.", price: "₹99" },
            { name: "Plain Lanyard", image: "/assets/lanyard/lanyard (2).png", content: "Basic lanyard with a secure hook.", price: "₹79" },
            { name: "Custom Logo Lanyard", image: "/assets/lanyard/lanyard (3).png", content: "Customized lanyards for corporate branding.", price: "₹129" },
            { name: "ID Card Holder", image: "/assets/lanyard/lanyard (4).png", content: "Transparent and sturdy card holder.", price: "₹49" },
            { name: "Retractable Badge Reel", image: "/assets/lanyard/lanyard (5).png", content: "Convenient for easy ID access.", price: "₹149" },
            { name: "Lanyard with Card Set", image: "/assets/lanyard/lanyard (6).png", content: "Complete set including ID card and holder.", price: "₹199" }
        ],
        "Metal Pen": [
            { name: "Executive Metal Pen", image: "/assets/pens/pen (1).png", content: "Sleek and stylish pen for professionals.", price: "₹199" },
            { name: "Luxury Metal Pen", image: "/assets/pens/pen (2).png", content: "Premium pen with a smooth writing experience.", price: "₹299" },
            { name: "Gift Box Metal Pen", image: "/assets/pens/pen (3).png", content: "Ideal for gifting and corporate events.", price: "₹399" },
            { name: "Branded Metal Pen", image: "/assets/pens/pen (7).png", content: "Custom branding available.", price: "₹499" },
            { name: "Engraved Metal Pen", image: "/assets/pens/pen (9).png", content: "Personalized engraving option.", price: "₹599" },
            { name: "Premium Metal Pen Set", image: "/assets/pens/pen (12).png", content: "Elegant set of two pens.", price: "₹799" }
        ],
        "Plastic Pen": [
            { name: "Basic Plastic Pen", image: "/assets/pens/pen (4).png", content: "Affordable and lightweight writing pen.", price: "₹49" },
            { name: "Colorful Plastic Pen", image: "/assets/pens/pen (5).png", content: "Vibrant and smooth ink flow.", price: "₹79" },
            { name: "Branded Plastic Pen", image: "/assets/pens/pen (6).png", content: "Custom branding available.", price: "₹99" },
            { name: "Transparent Body Pen", image: "/assets/pens/pen (8).png", content: "Modern and sleek design.", price: "₹129" },
            { name: "Soft Grip Plastic Pen", image: "/assets/pens/pen (11).png", content: "Comfortable grip for long writing sessions.", price: "₹149" }
        ],
        "Attendance Registers": [
            { name: "Attendance Register", image: "/assets/registers/attendance_register.png", content: "200 Pages | 19x32 cm | Hardbound | 31 Days Format | Ideal for Corporations, Institutions, Offices & Schools | Quire 4 | Pack of 1", price: 10.99 },
            { name: "NIRMAL SONS Attendance Register", image: "/assets/registers/nirmal_sons_register.png", content: "80 GSM Ledger Paper | Attendance Register for Offices & Schools | 31 x 19 cm (60 Pages)", price: 8.99 },
            { name: "NEELGAGAN Attendance Book", image: "/assets/registers/neelgagan_register.png", content: "31 Days No.1 Ordinary Binding | Register Size (19.0cm X 32.0cm) '16x26' | Pack of 2", price: 14.99 },
            { name: "LRS Hotel Register", image: "/assets/registers/lrs_hotel_register.png", content: "Medium Size - 10 * 15 Inch | 120 GSM Thick Paper | Leather Binding | 100 Pages | 1200 Entries", price: 19.99 },
            { name: "Visitor Register Book", image: "/assets/registers/visitor_register.png", content: "50 Sheets | 100 Pages | for Flat/House/Office/School/Factory | Hard Bound", price: 12.49 }
        ],
        "Binder Clips": [
            { name: "Wolpin Binder Clip", image: "/assets/binderclips/wolpin_clip.png", content: "32 mm Binder Clip | Clamp for Paper | Office, Home, School (24 Pcs)", price: 5.99 },
            { name: "IMPRINT Binder Clips", image: "/assets/binderclips/imprint_clip.png", content: "Black | 25 mm | Pack of 96 Pieces in a Reusable Pet Jar for Office and Home Use", price: 7.99 }
        ],
        "Pencils": [
            { name: "Apsara Regal Gold Extra Dark Pencil", image: "/assets/pencils/apsara_regal_gold.png", content: "Pack of 10 | Extra Dark for Smooth Writing", price: 4.99 },
            { name: "Apsara Matt Magic 2.0 Pencil", image: "/assets/pencils/apsara_matt_magic.png", content: "Writing Pencils with Dual Color Wood & Long-lasting Fun | Hexagonal Body for Strong Grip | Used for Art & Craft | Soft & Smooth Writing", price: 5.49 },
            { name: "Apsara Disney Frozen-2 Pencils", image: "/assets/pencils/apsara_disney_frozen.png", content: "Disney Pencils & Super Fun Pencils | Use for Kids, School & College Students | Extra Dark & Good Handwriting", price: 6.99 },
            { name: "Apsara Space Kids Extra Dark Pencil", image: "/assets/pencils/apsara_space_kids.png", content: "Hexagonal Body for Strong Grip | Easy Sharpening | Good Handwriting | Free Sharpener & Eraser | Non-Toxic", price: 5.99 },
            { name: "Apsara Disney Princess Pencils", image: "/assets/pencils/apsara_disney_princess.png", content: "Round Body for Strong Grip | Disney Princess Pencils | Fun Pencils for Kids | Easy Sharpening | Free Sharpener & Eraser", price: 6.49 }
        ],
        "Erasers": [
            { name: "Apsara Dual Neon Eraser", image: "/assets/erasor/neon_eraser.png", content: "White Eraser with Neon Colors", price: 1.99 },
            { name: "Street27 Colored Erasers", image: "/assets/erasor/colored_eraser.png", content: "30 pcs | Pencil Top Erasers | School Studying Supplies", price: 6.99 },
            { name: "Apsara Non Dust Eraser", image: "/assets/erasor/non_dust_eraser.png", content: "Erases Gently | No Paper Damage | Soft & Smooth", price: 1.49 }
        ],
        "Highlighters": [
            { name: "Neon Highlighter Set", image: "/assets/highlighters/highlighter (1).png", content: "Pack of 5 bright color highlighters.", price: 3.99 }
        ],
        "Markers": [
            { name: "Whiteboard Marker", image: "/assets/markers/marker (1).png", content: "Dry-erase markers for smooth writing.", price: 3.99 }
        ],
        "Notepad": [
            { name: "Sticky Notepad", image: "/assets/notepad/notepad (1).png", content: "Compact notepad for quick notes and reminders.", price: 2.99 }
        ],
        "Kobra File": [
            { name: "Kobra File", image: "/assets/kobrafile/kobrafile (1).jpg", content: "Durable file for organizing documents.", price: 4.99 },
        ],
        "Paper File Folder": [
            { name: "Paper File Folder", image: "/assets/paperfilefolder/folder (1).png", content: "Eco-friendly paper file folder for document organization.", price: 2.99 }
        ]

    },

    Awards: {
        "Trophy": [
            { name: "Gold Star Trophy", image: "/assets/trophy/trophy (1).png", content: "Elegant gold star trophy for excellence awards.", price: "₹1,500" },
            { name: "Victory Cup Trophy", image: "/assets/trophy/trophy (3).png", content: "Premium victory cup for sports and corporate events.", price: "₹2,200" },
            { name: "Achievement Award Trophy", image: "/assets/trophy/trophy (4).png", content: "Sleek and modern award trophy for achievements.", price: "₹1,800" },
            { name: "Classic Gold Trophy", image: "/assets/trophy/trophy (5).png", content: "Traditional gold-plated trophy for various occasions.", price: "₹2,500" },
            { name: "Star Performer Trophy", image: "/assets/trophy/trophy (6).png", content: "A prestigious trophy for recognizing top performers.", price: "₹2,000" },
            { name: "Champion Trophy", image: "/assets/trophy/trophy (9).png", content: "Elegant champion trophy for outstanding contributions.", price: "₹2,700" },
            { name: "Premium Recognition Trophy", image: "/assets/trophy/trophy (14).png", content: "High-quality award trophy with a premium finish.", price: "₹3,000" }
        ],
        "Badges": [
            { name: "Badge - Achievement", image: "/assets/badges.png", content: "Achievement badge for excellence and recognition.", price: "₹300" }
        ],
        "Wooden Trophy": [
            { name: "Wooden Excellence Trophy", image: "/assets/trophy/trophy (2).png", content: "Stylish wooden trophy for professional awards.", price: "₹1,800" },
            { name: "Wooden Shield Trophy", image: "/assets/trophy/trophy (7).png", content: "Classic shield-shaped wooden trophy.", price: "₹2,100" },
            { name: "Prestige Wooden Trophy", image: "/assets/trophy/trophy (8).png", content: "Premium wooden trophy with gold accents.", price: "₹2,500" },
            { name: "Grand Recognition Wooden Trophy", image: "/assets/trophy/trophy (10).png", content: "Elegant wooden trophy for corporate recognition.", price: "₹3,000" },
            { name: "Signature Wooden Trophy", image: "/assets/trophy/trophy (11).png", content: "Signature wooden trophy with intricate design.", price: "₹2,800" },
            { name: "Exclusive Wooden Trophy", image: "/assets/trophy/trophy (12).png", content: "High-end wooden trophy for prestigious awards.", price: "₹3,500" },
            { name: "Honorary Wooden Trophy", image: "/assets/trophy/trophy (13).png", content: "Wooden trophy designed for lifetime achievements.", price: "₹3,200" }
        ]

    },
    Miscellaneous: {
        "Rickshaw Hood": [
            { name: "Classic Rickshaw Hood", image: "/assets/rickshawhood/hood (1).png", content: "Durable cover for cycle rickshaw.", price: 59.99 }
        ]
    }
};

module.exports = subproducts;