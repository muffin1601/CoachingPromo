const allproducts = [
    {
        name: "Apparel",
        subcategories: [
            {
                name: "Graduation Hat",
                image: "/assets/graduation/hat (1).png",
                price: 9.99,
                products: [
                    {
                        product_code: "APP_GRA_BLA",
                        name: "Black Graduation Cap",
                        image: "/assets/graduation/hat (1).png",
                        subImages: [],
                        content: "Traditional graduation mortarboard cap with tassel.",
                        price: 9.99
                    }
                ]
            },
            {
                name: "Graduation Gown",
                image: "/assets/graduation/gown (1).png",
                price: 39.99,
                products: [
                    {
                        product_code: "APP_GRA_GOW",
                        name: "Formal Gown Set",
                        image: "/assets/graduation/gown (1).png",
                        subImages: [],
                        content: "Graduation gown with sleek finish.",
                        price: 39.99
                    }
                ]
            },
            {
                name: "Graduation Stole",
                image: "/assets/graduation/stole (1).png",
                price: 14.99,
                products: [
                    {
                        product_code: "APP_GRA_STO",
                        name: "Gold Graduation Stole",
                        image: "/assets/graduation/stole (1).png",
                        subImages: [],
                        content: "High-quality satin stole for convocation.",
                        price: 14.99
                    }
                ]
            },
            {
                name: "Convocation Sash",
                image: "/assets/graduation/sash (1).png",
                price: 12.99,
                products: [
                    {
                        product_code: "APP_GRA_SAS",
                        name: "Printed Sash",
                        image: "/assets/graduation/sash (1).png",
                        subImages: [],
                        content: "Customizable sash for ceremonial events.",
                        price: 12.99
                    }
                ]
            },
            {
                name: "Graduation Hood",
                image: "/assets/graduation/hood (1).png",
                price: 19.99,
                products: [
                    {
                        product_code: "APP_GRA_HOO",
                        name: "Academic Hood",
                        image: "/assets/graduation/hood (1).png",
                        subImages: [],
                        content: "Velvet-accented hood for graduation attire.",
                        price: 19.99
                    }
                ]
            },
            {
                name: "Graduation Accessories",
                image: "/assets/graduation/accessories (1).png",
                price: 49.99,
                products: [
                    {
                        product_code: "APP_GRA_ACC",
                        name: "Full Set Accessories",
                        image: "/assets/graduation/accessories (1).png",
                        subImages: [],
                        content: "Cap, gown, stole and badge included.",
                        price: 49.99
                    }
                ]
            },
            {
                name: "Graduation Degree Folders",
                image: "/assets/graduation/degreefolder (1).png",
                price: 9.99,
                products: [
                    {
                        product_code: "APP_GRA_DEG",
                        name: "Leather Degree Folder",
                        image: "/assets/graduation/degreefolder (1).png",
                        subImages: [],
                        content: "Formal degree folder with institution branding.",
                        price: 9.99
                    }
                ]
            },
            {
                name: "Kids Graduation Gown & Cap",
                image: "/assets/graduation/kidsgown (1).png",
                price: 24.99,
                products: [
                    {
                        product_code: "APP_KID_GOW",
                        name: "Kids Gown Set",
                        image: "/assets/graduation/kidsgown (1).png",
                        subImages: [],
                        content: "Gown and cap for kindergarten graduations.",
                        price: 24.99
                    }
                ]
            },
            {
                name: "Graduation Honor Cords",
                image: "/assets/graduation/honorcords (1).png",
                price: 6.99,
                products: [
                    {
                        product_code: "APP_GRA_HON",
                        name: "Red Honor Cord",
                        image: "/assets/graduation/honorcords (1).png",
                        subImages: [],
                        content: "Symbolic honor cords for academic distinction.",
                        price: 6.99
                    }
                ]
            },
            {
                name: "Polo T-Shirts",
                image: "/assets/Polotshirt/polo (1).png",
                price: 14.99,
                products: [
                    {
                        product_code: "APP_POL_CLA",
                        name: "Classic Polo",
                        image: "/assets/Polotshirt/polo (1).png",
                        subImages: [
                            "/assets/Polotshirt/polo (1)_side.png",
                            "/assets/Polotshirt/polo (1)_back.png",
                            "/assets/Polotshirt/polo (1)_zoom.png"
                        ],
                        content: "Classic fit polo with breathable fabric.",
                        price: 16.99
                    },
                    {
                        product_code: "APP_POL_SLI",
                        name: "Slim Fit Polo",
                        image: "/assets/Polotshirt/polo (2).png",
                        subImages: [
                            "/assets/Polotshirt/polo (2)_side.png",
                            "/assets/Polotshirt/polo (2)_back.png",
                            "/assets/Polotshirt/polo (2)_zoom.png"
                        ],
                        content: "Sleek slim fit polo for a modern look.",
                        price: 18.50
                    },
                    {
                        product_code: "APP_POL_STR",
                        name: "Striped Polo",
                        image: "/assets/Polotshirt/polo (3).png",
                        subImages: [
                            "/assets/Polotshirt/polo (3)_side.png",
                            "/assets/Polotshirt/polo (3)_back.png",
                            "/assets/Polotshirt/polo (3)_zoom.png"
                        ],
                        content: "Striped polo t-shirt with casual style.",
                        price: 17.75
                    },
                    {
                        product_code: "APP_POL_SPO",
                        name: "Sporty Polo",
                        image: "/assets/Polotshirt/polo (4).png",
                        subImages: [
                            "/assets/Polotshirt/polo (4)_side.png",
                            "/assets/Polotshirt/polo (4)_back.png",
                            "/assets/Polotshirt/polo (4)_zoom.png"
                        ],
                        content: "Ideal for sports and workouts.",
                        price: 19.99
                    },
                    {
                        product_code: "APP_POL_CON",
                        name: "Contrast Collar Polo",
                        image: "/assets/Polotshirt/polo (5).png",
                        subImages: [
                            "/assets/Polotshirt/polo (5)_side.png",
                            "/assets/Polotshirt/polo (5)_back.png",
                            "/assets/Polotshirt/polo (5)_zoom.png"
                        ],
                        content: "Features a unique contrast collar.",
                        price: 16.49
                    },
                    {
                        product_code: "APP_POL_COT",
                        name: "Cotton Polo",
                        image: "/assets/Polotshirt/polo (6).png",
                        subImages: [
                            "/assets/Polotshirt/polo (6)_side.png",
                            "/assets/Polotshirt/polo (6)_back.png",
                            "/assets/Polotshirt/polo (6)_zoom.png"
                        ],
                        content: "Soft cotton polo for everyday comfort.",
                        price: 15.99
                    },
                    {
                        product_code: "APP_POL_PRI",
                        name: "Printed Polo",
                        image: "/assets/Polotshirt/polo (7).png",
                        subImages: [
                            "/assets/Polotshirt/polo (7)_side.png",
                            "/assets/Polotshirt/polo (7)_back.png",
                            "/assets/Polotshirt/polo (7)_zoom.png"
                        ],
                        content: "Trendy printed design for casual vibes.",
                        price: 18.00
                    },
                    {
                        product_code: "APP_POL_PER",
                        name: "Performance Polo",
                        image: "/assets/Polotshirt/polo (8).png",
                        subImages: [
                            "/assets/Polotshirt/polo (8)_side.png",
                            "/assets/Polotshirt/polo (8)_back.png",
                            "/assets/Polotshirt/polo (8)_zoom.png"
                        ],
                        content: "Moisture-wicking polo for active wear.",
                        price: 21.50
                    },
                    {
                        product_code: "APP_POL_DES",
                        name: "Designer Polo",
                        image: "/assets/Polotshirt/polo (9).png",
                        subImages: [
                            "/assets/Polotshirt/polo (9)_side.png",
                            "/assets/Polotshirt/polo (9)_back.png",
                            "/assets/Polotshirt/polo (9)_zoom.png"
                        ],
                        content: "Premium designer polo with style.",
                        price: 25.99
                    },
                    {
                        product_code: "APP_POL_HER",
                        name: "Heritage Polo",
                        image: "/assets/Polotshirt/polo (10).png",
                        subImages: [
                            "/assets/Polotshirt/polo (10)_side.png",
                            "/assets/Polotshirt/polo (10)_back.png",
                            "/assets/Polotshirt/polo (10)_zoom.png"
                        ],
                        content: "Timeless design with modern comfort.",
                        price: 20.00
                    },
                    {
                        product_code: "APP_POL_EMB",
                        name: "Embroidered Polo",
                        image: "/assets/Polotshirt/polo (11).png",
                        subImages: [
                            "/assets/Polotshirt/polo (11)_side.png",
                            "/assets/Polotshirt/polo (11)_back.png",
                            "/assets/Polotshirt/polo (11)_zoom.png"
                        ],
                        content: "Features a stylish embroidered logo.",
                        price: 22.99
                    },
                    {
                        product_code: "APP_POL_ECO",
                        name: "Eco Polo",
                        image: "/assets/Polotshirt/polo (12).png",
                        subImages: [
                            "/assets/Polotshirt/polo (12)_side.png",
                            "/assets/Polotshirt/polo (12)_back.png",
                            "/assets/Polotshirt/polo (12)_zoom.png"
                        ],
                        content: "Eco-friendly polo made from recycled fibers.",
                        price: 17.25
                    },
                    {
                        product_code: "APP_POL_BOL",
                        name: "Bold Color Polo",
                        image: "/assets/Polotshirt/polo (13).png",
                        subImages: [
                            "/assets/Polotshirt/polo (13)_side.png",
                            "/assets/Polotshirt/polo (13)_back.png",
                            "/assets/Polotshirt/polo (13)_zoom.png"
                        ],
                        content: "Stand out with bold colors and fit.",
                        price: 16.75
                    },
                    {
                        product_code: "APP_POL_RET",
                        name: "Retro Polo",
                        image: "/assets/Polotshirt/polo (14).png",
                        subImages: [
                            "/assets/Polotshirt/polo (14)_side.png",
                            "/assets/Polotshirt/polo (14)_back.png",
                            "/assets/Polotshirt/polo (14)_zoom.png"
                        ],
                        content: "Retro-style polo for vintage lovers.",
                        price: 18.99
                    },
                    {
                        product_code: "APP_POL_MIN",
                        name: "Minimal Polo",
                        image: "/assets/Polotshirt/polo (15).png",
                        subImages: [
                            "/assets/Polotshirt/polo (15)_side.png",
                            "/assets/Polotshirt/polo (15)_back.png",
                            "/assets/Polotshirt/polo (15)_zoom.png"
                        ],
                        content: "Minimalist design for everyday wear.",
                        price: 14.99
                    },
                    {
                        product_code: "APP_POL_LUX",
                        name: "Luxury Polo",
                        image: "/assets/Polotshirt/polo (16).png",
                        subImages: [
                            "/assets/Polotshirt/polo (16)_side.png",
                            "/assets/Polotshirt/polo (16)_back.png",
                            "/assets/Polotshirt/polo (16)_zoom.png"
                        ],
                        content: "High-end fabric and finish.",
                        price: 29.99
                    },
                    {
                        product_code: "APP_POL_EVE",
                        name: "Everyday Polo",
                        image: "/assets/Polotshirt/polo (17).png",
                        subImages: [
                            "/assets/Polotshirt/polo (17)_side.png",
                            "/assets/Polotshirt/polo (17)_back.png",
                            "/assets/Polotshirt/polo (17)_zoom.png"
                        ],
                        content: "Perfect for daily casual wear.",
                        price: 15.50
                    }
                ]
            },
            {
                name: "Round Neck T-Shirts",
                image: "/assets/RoundNecktshirt/round (1).png",
                price: 11.99,
                products: [
                    {
                        product_code: "APP_ROU_BAS",
                        name: "Basic Round Neck",
                        image: "/assets/RoundNecktshirt/round (1).png",
                        subImages: [],
                        content: "Essential everyday t-shirt.",
                        price: 11.99
                    },
                    {
                        product_code: "APP_ROU_GRA",
                        name: "Graphic Round Neck",
                        image: "/assets/RoundNecktshirt/round (2).png",
                        subImages: [],
                        content: "Trendy graphic prints.",
                        price: 13.50
                    },
                    {
                        product_code: "APP_ROU_VIN",
                        name: "Vintage Round Neck",
                        image: "/assets/RoundNecktshirt/round (3).png",
                        subImages: [],
                        content: "Retro-inspired t-shirt design.",
                        price: 14.25
                    },
                    {
                        product_code: "APP_ROU_BOL",
                        name: "Bold Print Tee",
                        image: "/assets/RoundNecktshirt/round (4).png",
                        subImages: [],
                        content: "Make a statement with bold prints.",
                        price: 15.00
                    },
                    {
                        product_code: "APP_ROU_SOF",
                        name: "Soft Cotton Tee",
                        image: "/assets/RoundNecktshirt/round (5).png",
                        subImages: [],
                        content: "Extra soft for maximum comfort.",
                        price: 12.49
                    },
                    {
                        product_code: "APP_ROU_SPO",
                        name: "Sports Round Neck",
                        image: "/assets/RoundNecktshirt/round (6).png",
                        subImages: [],
                        content: "Ideal for workouts and sports.",
                        price: 14.99
                    },
                    {
                        product_code: "APP_ROU_CAS",
                        name: "Casual Fit Tee",
                        image: "/assets/RoundNecktshirt/round (7).png",
                        subImages: [],
                        content: "Relaxed fit for a casual look.",
                        price: 12.99
                    },
                    {
                        product_code: "APP_ROU_URB",
                        name: "Urban Style Tee",
                        image: "/assets/RoundNecktshirt/round (8).png",
                        subImages: [],
                        content: "Perfect for street style fashion.",
                        price: 13.99
                    },
                    {
                        product_code: "APP_ROU_MON",
                        name: "Monochrome Tee",
                        image: "/assets/RoundNecktshirt/round (9).png",
                        subImages: [],
                        content: "Simple and sleek single color design.",
                        price: 12.00
                    },
                    {
                        product_code: "APP_ROU_EVE",
                        name: "Everyday Round Neck",
                        image: "/assets/RoundNecktshirt/round (10).png",
                        subImages: [],
                        content: "Great for daily wear.",
                        price: 11.50
                    }
                ]
            },
            {
                name: "Shirts",
                image: "/assets/shirts/shirt (1).png",
                price: 22.99,
                products: [
                    {
                        product_code: "APP_SHI_FOR",
                        name: "Formal Blue Shirt",
                        image: "/assets/shirts/shirt (1).png",
                        subImages: [],
                        content: "Classic blue formal shirt for work.",
                        price: 22.99
                    },
                    {
                        product_code: "APP_SHI_WHI",
                        name: "White Office Shirt",
                        image: "/assets/shirts/shirt (2).png",
                        subImages: [],
                        content: "Elegant white shirt with a crisp look.",
                        price: 24.50
                    },
                    {
                        product_code: "APP_SHI_SLI",
                        name: "Slim Fit Shirt",
                        image: "/assets/shirts/shirt (3).png",
                        subImages: [],
                        content: "Tailored slim fit for a sharp appearance.",
                        price: 25.00
                    },
                    {
                        product_code: "APP_SHI_CHE",
                        name: "Checked Shirt",
                        image: "/assets/shirts/shirt (4).png",
                        subImages: [],
                        content: "Stylish checks for casual wear.",
                        price: 19.99
                    },
                    {
                        product_code: "APP_SHI_DEN",
                        name: "Denim Shirt",
                        image: "/assets/shirts/shirt (5).png",
                        subImages: [],
                        content: "Trendy denim shirt for outings.",
                        price: 26.75
                    },
                    {
                        product_code: "APP_SHI_OXF",
                        name: "Oxford Shirt",
                        image: "/assets/shirts/shirt (6).png",
                        subImages: [],
                        content: "Classic Oxford style for semi-formals.",
                        price: 23.50
                    },
                    {
                        product_code: "APP_SHI_LIN",
                        name: "Linen Shirt",
                        image: "/assets/shirts/shirt (7).png",
                        subImages: [],
                        content: "Breathable linen for summer days.",
                        price: 27.99
                    }
                ]
            },
            {
                name: "Hoodies-jackets",
                image: "/assets/hoodiesjackets/jacket (10).png",
                price: 29.99,
                products: [
                    {
                        product_code: "APP_HOO_CLA",
                        name: "Classic Hoodie",
                        image: "/assets/hoodiesjackets/jacket (10).png",
                        subImages: [],
                        content: "Soft fleece hoodie for cozy comfort.",
                        price: 29.99
                    },
                    {
                        product_code: "APP_HOO_BOM",
                        name: "Bomber Jacket",
                        image: "/assets/hoodiesjackets/jacket (2).png",
                        subImages: [],
                        content: "Trendy bomber jacket for streetwear.",
                        price: 39.99
                    },
                    {
                        product_code: "APP_HOO_PUF",
                        name: "Puffer Jacket",
                        image: "/assets/hoodiesjackets/jacket (3).png",
                        subImages: [],
                        content: "Warm and padded for winter wear.",
                        price: 49.50
                    },
                    {
                        product_code: "APP_HOO_WIN",
                        name: "Windbreaker",
                        image: "/assets/hoodiesjackets/jacket (4).png",
                        subImages: [],
                        content: "Lightweight and water-resistant.",
                        price: 34.99
                    },
                    {
                        product_code: "APP_HOO_DEN",
                        name: "Denim Jacket",
                        image: "/assets/hoodiesjackets/jacket (5).png",
                        subImages: [],
                        content: "Classic denim for casual style.",
                        price: 37.75
                    },
                    {
                        product_code: "APP_HOO_LEA",
                        name: "Leather Jacket",
                        image: "/assets/hoodiesjackets/jacket (6).png",
                        subImages: [],
                        content: "Faux leather with a rugged look.",
                        price: 59.99
                    },
                    {
                        product_code: "APP_HOO_UTI",
                        name: "Utility Jacket",
                        image: "/assets/hoodiesjackets/jacket (7).png",
                        subImages: [],
                        content: "Functional and fashionable.",
                        price: 45.00
                    },
                    {
                        product_code: "APP_HOO_BLA",
                        name: "Blazer Jacket",
                        image: "/assets/hoodiesjackets/jacket (8).png",
                        subImages: [],
                        content: "Semi-formal blazer jacket.",
                        price: 42.50
                    },
                    {
                        product_code: "APP_HOO_VAR",
                        name: "Varsity Jacket",
                        image: "/assets/hoodiesjackets/jacket (9).png",
                        subImages: [],
                        content: "Stylish varsity design.",
                        price: 41.25
                    },
                    {
                        product_code: "APP_HOO_TRA",
                        name: "Track Jacket",
                        image: "/assets/hoodiesjackets/jacket (1).png",
                        subImages: [],
                        content: "Sporty track jacket for active wear.",
                        price: 35.99
                    },
                    {
                        product_code: "APP_HOO_TAC",
                        name: "Tactical Jacket",
                        image: "/assets/hoodiesjackets/jacket (11).png",
                        subImages: [],
                        content: "Military-inspired utility design.",
                        price: 48.00
                    },
                    {
                        product_code: "APP_HOO_WOO",
                        name: "Wool Jacket",
                        image: "/assets/hoodiesjackets/jacket (12).png",
                        subImages: [],
                        content: "Warm wool blend for colder seasons.",
                        price: 46.25
                    }
                ]
            },
            {
                name: "Nehru Jacket",
                image: "/assets/nehrujacket/nehru (1).png",
                price: 34.99,
                products: [
                    {
                        product_code: "APP_NEH_CLA",
                        name: "Classic Nehru Jacket",
                        image: "/assets/nehrujacket/nehru (1).png",
                        subImages: [],
                        content: "Elegant sleeveless Nehru jacket for formal occasions.",
                        price: 34.99
                    },
                    {
                        product_code: "APP_NEH_TEX",
                        name: "Textured Nehru Jacket",
                        image: "/assets/nehrujacket/nehru (2).png",
                        subImages: [],
                        content: "Textured fabric with premium buttons.",
                        price: 39.99
                    }
                ]
            },
            {
                name: "Teacher Jacket",
                image: "/assets/teacherjacket/jacket (1).png",
                price: 29.99,
                products: [
                    {
                        product_code: "APP_TEA_FOR",
                        name: "Formal Teacher Jacket",
                        image: "/assets/teacherjacket/jacket (1).png",
                        subImages: [],
                        content: "Professional jacket suitable for ceremonies.",
                        price: 29.99
                    }
                ]
            },
        ]
    },
    {
    name: "Bags",
    subcategories: [
        {
            name: "Institute Backpack",
            image: "/assets/bags/bag1.jpg",
            price: 22.99,
            products: [
                {
                    product_code: "BAG_INS_CLA",
                    name: "Classic Backpack",
                    image: "/assets/bags/bag1.jpg",
                    subImages: [],
                    content: "Durable and spacious classic backpack.",
                    price: 29.99
                },
                {
                    product_code: "BAG_INS_TRA",
                    name: "Travel Backpack",
                    image: "/assets/bags/bag2.jpg",
                    subImages: [],
                    content: "Lightweight travel backpack with multiple compartments.",
                    price: 39.99
                },
                {
                    product_code: "BAG_INS_SPO",
                    name: "Sports Backpack",
                    image: "/assets/bags/bag3.png",
                    subImages: [],
                    content: "Water-resistant sports backpack for outdoor activities.",
                    price: 34.99
                },
                {
                    product_code: "BAG_INS_LAP",
                    name: "Laptop Backpack",
                    image: "/assets/bags/bag4.png",
                    subImages: [],
                    content: "Ergonomic laptop backpack with padded compartments.",
                    price: 49.99
                },
                {
                    product_code: "BAG_INS_URB",
                    name: "Urban Backpack",
                    image: "/assets/bags/bag5.jpg",
                    subImages: [],
                    content: "Stylish urban backpack for daily use.",
                    price: 27.99
                },
                {
                    product_code: "BAG_INS_STU",
                    name: "Student Backpack",
                    image: "/assets/bags/bag6.jpg",
                    subImages: [],
                    content: "Spacious student backpack with organizer pockets.",
                    price: 24.99
                },
                {
                    product_code: "BAG_INS_VIN",
                    name: "Vintage Backpack",
                    image: "/assets/bags/bag7.jpg",
                    subImages: [],
                    content: "Retro-style vintage backpack with leather straps.",
                    price: 45.99
                },
                {
                    product_code: "BAG_INS_CAM",
                    name: "Camping Backpack",
                    image: "/assets/bags/bag8.jpg",
                    subImages: [],
                    content: "Heavy-duty camping backpack with adjustable straps.",
                    price: 54.99
                },
                {
                    product_code: "BAG_INS_MIN",
                    name: "Minimalist Backpack",
                    image: "/assets/bags/bag9.png",
                    subImages: [],
                    content: "Sleek and modern minimalist backpack.",
                    price: 31.99
                },
                {
                    product_code: "BAG_INS_COM",
                    name: "Commuter Backpack",
                    image: "/assets/bags/bag10.jpg",
                    subImages: [],
                    content: "Compact commuter backpack for work and travel.",
                    price: 37.99
                },
                {
                    product_code: "BAG_INS_SCH",
                    name: "School Backpack",
                    image: "/assets/bags/bag11.jpg",
                    subImages: [],
                    content: "Comfortable and durable backpack for students.",
                    price: 22.99
                },
                {
                    product_code: "BAG_INS_TRE",
                    name: "Trekking Backpack",
                    image: "/assets/bags/bag13.jpg",
                    subImages: [],
                    content: "Large trekking backpack with hydration compartment.",
                    price: 59.99
                },
                {
                    product_code: "BAG_INS_BUS",
                    name: "Business Backpack",
                    image: "/assets/bags/bag15.png",
                    subImages: [],
                    content: "Elegant business backpack with anti-theft features.",
                    price: 52.99
                },
                {
                    product_code: "BAG_INS_HIK",
                    name: "Hiking Backpack",
                    image: "/assets/bags/bag17.png",
                    subImages: [],
                    content: "Versatile hiking backpack with extra storage.",
                    price: 44.99
                },
                {
                    product_code: "BAG_INS_CON",
                    name: "Convertible Backpack",
                    image: "/assets/bags/bag18.png",
                    subImages: [],
                    content: "Convertible backpack with detachable straps.",
                    price: 38.99
                },
                {
                    product_code: "BAG_INS_RUG",
                    name: "Rugged Backpack",
                    image: "/assets/bags/bag19.png",
                    subImages: [],
                    content: "Heavy-duty rugged backpack for outdoor adventures.",
                    price: 57.99
                },
                {
                    product_code: "BAG_INS_CAS",
                    name: "Casual Backpack",
                    image: "/assets/bags/bag20.png",
                    subImages: [],
                    content: "Lightweight casual backpack for everyday use.",
                    price: 26.99
                },
                {
                    product_code: "BAG_INS_PRE",
                    name: "Premium Leather Backpack",
                    image: "/assets/bags/bag21.png",
                    subImages: [],
                    content: "Luxurious leather backpack for professionals.",
                    price: 69.99
                },
                {
                    product_code: "BAG_INS_ECO",
                    name: "Eco-friendly Backpack",
                    image: "/assets/bags/bag22.jpg",
                    subImages: [],
                    content: "Sustainable eco-friendly backpack made from recycled materials.",
                    price: 35.99
                },
                {
                    product_code: "BAG_INS_MUL",
                    name: "Multi-pocket Backpack",
                    image: "/assets/bags/bag23.png",
                    subImages: [],
                    content: "Backpack with multiple compartments for better organization.",
                    price: 42.99
                },
                {
                    product_code: "BAG_INS_ANT",
                    name: "Anti-theft Backpack",
                    image: "/assets/bags/bag24.png",
                    subImages: [],
                    content: "Backpack with built-in anti-theft zippers and RFID pockets.",
                    price: 48.99
                },
                {
                    product_code: "BAG_INS_COL",
                    name: "College Backpack",
                    image: "/assets/bags/bag26.jpg",
                    subImages: [],
                    content: "Trendy college backpack with stylish prints.",
                    price: 29.99
                },
                {
                    product_code: "BAG_INS_WAT",
                    name: "Waterproof Backpack",
                    image: "/assets/bags/bag28.png",
                    subImages: [],
                    content: "Fully waterproof backpack for extreme conditions.",
                    price: 55.99
                }
            ]
        },
        {
            name: "Jute Bag",
            image: "/assets/totebags/totebag (1).png",
            price: 299,
            products: [
                {
                    product_code: "BAG_JUT_ECO",
                    name: "Eco-Friendly Jute Bag",
                    image: "/assets/totebags/totebag (1).png",
                    subImages: [],
                    content: "Sustainable jute bag perfect for daily use with strong handles.",
                    price: 349
                },
                {
                    product_code: "BAG_JUT_HAN",
                    name: "Handcrafted Jute Tote",
                    image: "/assets/totebags/totebag (23).png",
                    subImages: [],
                    content: "Elegant jute tote with a stylish print for casual outings.",
                    price: 399
                },
                {
                    product_code: "BAG_JUT_CLA",
                    name: "Classic Jute Carry Bag",
                    image: "/assets/totebags/totebag (24).png",
                    subImages: [],
                    content: "Durable and spacious jute bag ideal for shopping and work.",
                    price: 299
                },
                {
                    product_code: "BAG_JUT_RUS",
                    name: "Rustic Charm Jute Bag",
                    image: "/assets/totebags/totebag (25).png",
                    subImages: [],
                    content: "Aesthetic jute tote with earthy tones and sturdy handles.",
                    price: 449
                },
                {
                    product_code: "BAG_JUT_PRE",
                    name: "Premium Jute Shopping Bag",
                    image: "/assets/totebags/totebag (26).png",
                    subImages: [],
                    content: "High-quality jute bag designed for everyday eco-conscious shoppers.",
                    price: 499
                }
            ]
        },
        {
            name: "Tote Bag",
            image: "/assets/totebags/totebag (2).png",
            price: 299,
            products: [
                {
                    product_code: "BAG_TOT_MIN",
                    name: "Minimalist Canvas Tote",
                    image: "/assets/totebags/totebag (2).png",
                    subImages: [],
                    content: "Simple yet stylish tote bag made of high-quality canvas.",
                    price: 299
                },
                {
                    product_code: "BAG_TOT_PRI",
                    name: "Printed Casual Tote",
                    image: "/assets/totebags/totebag (3).png",
                    subImages: [],
                    content: "Trendy printed tote bag perfect for college and casual outings.",
                    price: 349
                },
                {
                    product_code: "BAG_TOT_OVE",
                    name: "Oversized Carry-All Tote",
                    image: "/assets/totebags/totebag (4).png",
                    subImages: [],
                    content: "Spacious tote bag designed for carrying all your essentials.",
                    price: 399
                }
                // Add remaining Tote Bag entries in same format...
            ]
        },
        {
            name: "Miscellaneous",
            image: "/assets/bag2.png",
            price: 19.99,
            products: [
                {
                    product_code: "BAG_MIS_MIS",
                    name: "Miscellaneous",
                    image: "/assets/bag2.png",
                    subImages: [],
                    content: "Assorted bag collection.",
                    price: 19.99
                }
            ]
        }
    ]
},
{
     name: "Promotional Items",
  subcategories: [
    {
      name: "Water Bottle",
      image: "/assets/bottle/bottle (1).png",
      price: 600,
      products: [
        {
          name: "Stainless Steel Bottle",
          price: 600,
          content:
            "Durable stainless steel bottle with a sleek finish. Keeps beverages hot or cold for hours.",
          image: "/assets/bottle/bottle (1).png",
        },
        {
          name: "Eco-Friendly Water Bottle",
          price: 450,
          content:
            "Made from BPA-free materials, this lightweight bottle is perfect for daily use.",
          image: "/assets/bottle/bottle (2).png",
        },
        {
          name: "Glass Water Bottle",
          price: 700,
          content:
            "Premium glass bottle with a silicone sleeve for better grip and protection.",
          image: "/assets/bottle/bottle (3).png",
        },
        {
          name: "Sports Sipper Bottle",
          price: 550,
          content:
            "Leak-proof and easy to carry, this bottle is ideal for gym and outdoor activities.",
          image: "/assets/bottle/bottle (4).png",
        },
        {
          name: "Insulated Flask Bottle",
          price: 800,
          content:
            "Double-wall insulation keeps your drinks hot or cold for up to 12 hours.",
          image: "/assets/bottle/bottle (5).png",
        },
        {
          name: "Aluminum Sports Bottle",
          price: 500,
          content: "Lightweight and sturdy, designed for active lifestyles.",
          image: "/assets/bottle/bottle (6).png",
        },
      ],
    },
    {
      name: "Mug",
      image: "/assets/mug/mug (1).png",
      price: 250,
      products: [
        {
          name: "Classic Ceramic Mug",
          price: 250,
          content:
            "Simple and elegant ceramic mug, perfect for coffee and tea lovers.",
          image: "/assets/mug/mug (1).png",
        },
        {
          name: "Customized Printed Mug",
          price: 350,
          content:
            "Personalized mug with high-quality prints, perfect for gifting.",
          image: "/assets/mug/mug (2).png",
        },
        {
          name: "Insulated Travel Mug",
          price: 500,
          content:
            "Keeps beverages hot or cold for hours, with a spill-proof lid.",
          image: "/assets/mug/mug (3).png",
        },
      ],
    },
    {
      name: "Diary Set",
      image: "/assets/diaryset/diaryset (1).png",
      price: 750,
      products: [
        {
          name: "Leather-bound Diary",
          price: 750,
          content:
            "Elegant leather-bound diary with high-quality paper, perfect for professionals.",
          image: "/assets/diaryset/diaryset (1).png",
        },
        {
          name: "Personal Organizer",
          price: 650,
          content:
            "Compact organizer with calendar, to-do lists, and notes section.",
          image: "/assets/diaryset/diaryset (2).png",
        },
        {
          name: "Corporate Diary Set",
          price: 850,
          content:
            "Premium diary set with a pen, bookmarks, and a sleek design.",
          image: "/assets/diaryset/diaryset (3).png",
        },
      ],
    },
    {
      name: "Canopy",
      image: "/assets/canopy/canopy (8).png",
      price: 2999,
      products: [
        {
          name: "Outdoor Canopy",
          price: 2999,
          content:
            "Lightweight and weather-resistant canopy, perfect for outdoor gatherings and picnics.",
          image: "/assets/canopy/canopy (8).png",
        },
        {
          name: "Event Canopy",
          price: 3499,
          content:
            "Spacious and durable event canopy designed for fairs, exhibitions, and celebrations.",
          image: "/assets/canopy/canopy (9).png",
        },
        {
          name: "Portable Canopy",
          price: 2799,
          content: "Easy to assemble and carry, ideal for quick outdoor setups.",
          image: "/assets/canopy/canopy (10).png",
        },
        {
          name: "Sun Shelter Canopy",
          price: 3999,
          content:
            "Provides excellent sun protection, perfect for beach and park outings.",
          image: "/assets/canopy/canopy (11).png",
        },
        {
          name: "Garden Canopy",
          price: 2599,
          content:
            "Enhance your outdoor space with this stylish and protective garden canopy.",
          image: "/assets/canopy/canopy (12).png",
        },
        {
          name: "Pop-Up Canopy",
          price: 4299,
          content:
            "Quick and hassle-free setup, perfect for trade shows and markets.",
          image: "/assets/canopy/canopy (13).png",
        },
        {
          name: "Beach Canopy",
          price: 3199,
          content: "Wind-resistant and UV-protected canopy designed for beach trips.",
          image: "/assets/canopy/canopy (2).png",
        },
        {
          name: "Festival Canopy",
          price: 3799,
          content:
            "Bright and colorful canopy, great for festivals and outdoor parties.",
          image: "/assets/canopy/canopy (3).png",
        },
        {
          name: "Commercial Canopy",
          price: 4999,
          content:
            "Heavy-duty and spacious canopy designed for business and commercial events.",
          image: "/assets/canopy/canopy (4).png",
        },
        {
          name: "Heavy Duty Canopy",
          price: 5499,
          content:
            "Strong and durable canopy with reinforced structure for long-term use.",
          image: "/assets/canopy/canopy (5).png",
        },
        {
          name: "Luxury Canopy",
          price: 6999,
          content:
            "Premium-quality canopy with elegant design, ideal for high-end events.",
          image: "/assets/canopy/canopy (1).png",
        },
        {
          name: "Patio Canopy",
          price: 2999,
          content:
            "Stylish and functional canopy to provide shade and comfort in your patio.",
          image: "/assets/canopy/canopy (6).png",
        },
        {
          name: "Camping Canopy",
          price: 4499,
          content: "Portable and durable canopy designed for camping and outdoor adventures.",
          image: "/assets/canopy/canopy (7).png",
        },
        {
          name: "Custom Printed Canopy",
          price: 7999,
          content:
            "Fully customizable canopy for brand promotions and corporate events.",
          image: "/assets/canopy/canopy (14).png",
        },
        {
          name: "Branded Canopy",
          price: 8499,
          content:
            "Premium-quality branded canopy, ideal for marketing and promotional campaigns.",
          image: "/assets/canopy/canopy (15).png",
        },
      ],
    },
    {
      name: "Rickshaw Hood",
      image: "/assets/rickshawhood/hood (1).png",
      price: 59.99,
      products: [
        {
          name: "Classic Rickshaw Hood",
          price: 59.99,
          content: "Durable cover for cycle rickshaw.",
          image: "/assets/rickshawhood/hood (1).png",
        },
      ],
    },
    {
      name: "Paper Stand",
      image: "/assets/paperstand/paperstand (1).png",
      price: 499,
      products: [
        {
          name: "Foldable Paper Stand",
          price: 499,
          content:
            "Compact and lightweight foldable stand for organizing papers efficiently.",
          image: "/assets/paperstand/paperstand (1).png",
        },
        {
          name: "Wooden Paper Stand",
          price: 799,
          content: "Elegant wooden paper stand, perfect for office and home use.",
          image: "/assets/paperstand/paperstand (2).png",
        },
      ],
    },
    {
      name: "Wristbands",
      image: "/assets/wristbands/wristband (1).png",
      price: 2.99,
      products: [
        {
          name: "Silicone Wristband",
          price: 2.99,
          content: "Durable silicone band for events and awareness.",
          image: "/assets/wristbands/wristband (1).png",
        },
      ],
    },
    {
      name: "Mobile Stand",
      image: "/assets/mobilestand/stand (1).png",
      price: 4.99,
      products: [
        {
          name: "Foldable Mobile Stand",
          price: 4.99,
          content: "Compact and adjustable stand for all phones.",
          image: "/assets/mobilestand/stand (1).png",
        },
      ],
    },
    {
      name: "Custom Flashcards",
      image: "/assets/flashcards/cards (1).png",
      price: 6.99,
      products: [
        {
          name: "Educational Flashcards",
          price: 6.99,
          content: "Personalized flashcards for learning and branding.",
          image: "/assets/flashcards/cards (1).png",
        },
      ],
    },
    {
      name: "Stress Balls",
      image: "/assets/stressball/ball (1).png",
      price: 3.99,
      products: [
        {
          name: "Round Stress Ball",
          price: 3.99,
          content: "Soft stress relief ball for office and home use.",
          image: "/assets/stressball/ball (1).png",
        },
      ],
    },
    {
      name: "Wall Clocks",
      image: "/assets/wallclock/clock (1).png",
      price: 15.99,
      products: [
        {
          name: "Modern Wall Clock",
          price: 15.99,
          content: "Stylish wall clock with silent movement.",
          image: "/assets/wallclock/clock (1).png",
        },
      ],
    },
    {
      name: "Table Clock",
      image: "/assets/tableclock/clock (1).png",
      price: 13.99,
      products: [
        {
          name: "Wooden Table Clock",
          price: 13.99,
          content: "Classic wooden table clock with analog display.",
          image: "/assets/tableclock/clock (1).png",
        },
      ],
    },
    {
      name: "Mouse Pad",
      image: "/assets/mousepad/pad (1).png",
      price: 5.99,
      products: [
        {
          name: "Smooth Surface Mouse Pad",
          price: 5.99,
          content: "Comfortable and anti-slip mouse pad.",
          image: "/assets/mousepad/pad (1).png",
        },
      ],
    },
    {
      name: "Computer Pad",
      image: "/assets/computerpad/pad (1).png",
      price: 6.99,
      products: [
        {
          name: "Large Desk Mat",
          price: 6.99,
          content:
            "Covers keyboard and mouse area for better experience.",
          image: "/assets/computerpad/pad (1).png",
        },
      ],
    },
    {
      name: "Photo Frame",
      image: "/assets/photoframe/frame (1).png",
      price: 8.99,
      products: [
        {
          name: "Wooden Photo Frame",
          price: 8.99,
          content: "High-quality frame for 4x6 and 5x7 photos.",
          image: "/assets/photoframe/frame (1).png",
        },
      ],
    },
    {
      name: "Magic Cube",
      image: "/assets/magiccube/cube (1).png",
      price: 7.99,
      products: [
        {
          name: "Promotional Magic Cube",
          price: 7.99,
          content: "Fun puzzle cube for branding and giveaways.",
          image: "/assets/magiccube/cube (1).png",
        },
      ],
    },
    {
      name: "Planner",
      image: "/assets/planner/planner (1).png",
      price: 11.99,
      products: [
        {
          name: "Daily Planner Book",
          price: 11.99,
          content: "Organize your day with this professional planner.",
          image: "/assets/planner/planner (1).png",
        },
      ],
    },
  ],
},

    {
        name: "Stationery",
        subcategories: [
            {
                name: "Table Calendar",
                image: "/assets/tablecalender.png",
                price: 6.99,
                products: [
                    { name: "Classic Table Calendar", image: "/assets/calenders/calender (1).png", content: "Perfect for desks at home or office.", price: 249 },
                    { name: "Corporate Table Calendar", image: "/assets/calenders/calender (5).png", content: "Professional design for office use.", price: 399 },
                    { name: "Personalized Table Calendar", image: "/assets/calenders/calender (6).png", content: "Custom printed calendars for branding and gifting.", price: 499 }
                ]
            },
            {
                name: "Wall Calendar",
                image: "/assets/wallcalender.png",
                price: 8.99,
                products: [
                    { name: "Scenic Wall Calendar", image: "/assets/calenders/calender (3).png", content: "Beautiful landscapes and sceneries.", price: 299 },
                    { name: "Corporate Wall Calendar", image: "/assets/calenders/calender (4).png", content: "Minimalistic design for offices and businesses.", price: 399 },
                    { name: "Customized Wall Calendar", image: "/assets/calenders/calender (2).png", content: "Personalized branding for companies.", price: 499 }
                ]
            },
            {
                name: "Binder Clips",
                image: "/assets/binderclip.png",
                price: 6.99,
                products: [
                    { name: "Wolpin Binder Clip", image: "/assets/binderclips/wolpin_clip.png", content: "32 mm Binder Clip | Clamp for Paper | Office, Home, School (24 Pcs)", price: 5.99 },
                    { name: "IMPRINT Binder Clips", image: "/assets/binderclips/imprint_clip.png", content: "Black | 25 mm | Pack of 96 Pieces in a Reusable Pet Jar for Office and Home Use", price: 7.99 }
                ]
            },
            {
                name: "Pencils",
                image: "/assets/pencil.png",
                price: 6.99,
                products: [
                    { name: "Apsara Regal Gold Extra Dark Pencil", image: "/assets/pencils/apsara_regal_gold.png", content: "Pack of 10 | Extra Dark for Smooth Writing", price: 4.99 },
                    { name: "Apsara Matt Magic 2.0 Pencil", image: "/assets/pencils/apsara_matt_magic.png", content: "Writing Pencils with Dual Color Wood & Long-lasting Fun | Hexagonal Body for Strong Grip | Used for Art & Craft | Soft & Smooth Writing", price: 5.49 },
                    { name: "Apsara Disney Frozen-2 Pencils", image: "/assets/pencils/apsara_disney_frozen.png", content: "Disney Pencils & Super Fun Pencils | Use for Kids, School & College Students | Extra Dark & Good Handwriting", price: 6.99 },
                    { name: "Apsara Space Kids Extra Dark Pencil", image: "/assets/pencils/apsara_space_kids.png", content: "Hexagonal Body for Strong Grip | Easy Sharpening | Good Handwriting | Free Sharpener & Eraser | Non-Toxic", price: 5.99 },
                    { name: "Apsara Disney Princess Pencils", image: "/assets/pencils/apsara_disney_princess.png", content: "Round Body for Strong Grip | Disney Princess Pencils | Fun Pencils for Kids | Easy Sharpening | Free Sharpener & Eraser", price: 6.49 }
                ]
            },
            {
                name: "Erasers",
                image: "/assets/erasor.png",
                price: 6.99,
                products: [
                    { name: "Apsara Dual Neon Eraser", image: "/assets/erasor/neon_eraser.png", content: "White Eraser with Neon Colors", price: 1.99 },
                    { name: "Street27 Colored Erasers", image: "/assets/erasor/colored_eraser.png", content: "30 pcs | Pencil Top Erasers | School Studying Supplies", price: 6.99 },
                    { name: "Apsara Non Dust Eraser", image: "/assets/erasor/non_dust_eraser.png", content: "Erases Gently | No Paper Damage | Soft & Smooth", price: 1.49 }
                ]
            },
            {
                name: "Exam Pad",
                image: "/assets/exampad.png",
                price: 5.99,
                products: [
                    { name: "Standard Exam Pad", image: "/assets/exampad/exampad (1).jpg", content: "Essential exam pad for students and professionals.", price: 249 },
                    { name: "Hardboard Exam Pad", image: "/assets/exampad/exampad (2).jpg", content: "Durable hardboard for sturdy writing support.", price: 349 },
                    { name: "A4 Size Exam Pad", image: "/assets/exampad/exampad (3).jpg", content: "Perfect for A4 sheets and documents.", price: 299 },
                    { name: "Clip Board Exam Pad", image: "/assets/exampad/exampad (4).jpg", content: "Comes with a strong clip to hold papers securely.", price: 399 },
                    { name: "Luxury Exam Pad", image: "/assets/exampad/exampad (5).jpg", content: "Premium quality for executives and professionals.", price: 599 }
                ]
            },
            {
                name: "Notebook",
                image: "/assets/notebook.png",
                price: 3.99,
                products: [
                    { name: "Classic Notebook", image: "/assets/notebook/notebook (1).png", content: "Perfect for note-taking, journaling, and writing.", price: 499 },
                    { name: "Spiral Notebook", image: "/assets/notebook/notebook (2).png", content: "Durable spiral binding for easy flipping.", price: 599 },
                    { name: "Leather Cover Notebook", image: "/assets/notebook/notebook (3).png", content: "Premium leather cover for a professional look.", price: 899 },
                    { name: "Hardcover Notebook", image: "/assets/notebook/notebook (4).png", content: "Sturdy hardcover for durability and style.", price: 699 },
                    { name: "Softcover Notebook", image: "/assets/notebook/notebook (5).png", content: "Lightweight and flexible for everyday use.", price: 399 },
                    { name: "Custom Printed Notebook", image: "/assets/notebook/notebook (6).png", content: "Personalized notebooks for corporate branding.", price: 999 }
                ]
            },
            {
                name: "Notepad",
                image: "/assets/notepad.png",
                price: 2.99,
                products: [
                    { name: "Sticky Notepad", image: "/assets/notepad/notepad (1).png", content: "Compact notepad for quick notes and reminders.", price: 2.99 }
                ]
            },
            {
                name: "Highlighters",
                image: "/assets/highlighter.png",
                price: 3.99,
                products: [
                    { name: "Neon Highlighter Set", image: "/assets/highlighters/highlighter (1).png", content: "Pack of 5 bright color highlighters.", price: 3.99 }
                ]
            },
            {
                name: "Markers",
                image: "/assets/markers.png",
                price: 3.99,
                products: [
                    { name: "Whiteboard Marker", image: "/assets/markers/marker (1).png", content: "Dry-erase markers for smooth writing.", price: 3.99 }
                ]
            },
            {
                name: "Metal Pen",
                image: "/assets/metalpen.png",
                price: 7.99,
                products: [
                    { name: "Executive Metal Pen", image: "/assets/pens/pen (1).png", content: "Sleek and stylish pen for professionals.", price: 199 },
                    { name: "Luxury Metal Pen", image: "/assets/pens/pen (2).png", content: "Premium pen with a smooth writing experience.", price: 299 },
                    { name: "Gift Box Metal Pen", image: "/assets/pens/pen (3).png", content: "Ideal for gifting and corporate events.", price: 399 },
                    { name: "Branded Metal Pen", image: "/assets/pens/pen (7).png", content: "Custom branding available.", price: 499 },
                    { name: "Engraved Metal Pen", image: "/assets/pens/pen (9).png", content: "Personalized engraving option.", price: 599 },
                    { name: "Premium Metal Pen Set", image: "/assets/pens/pen (12).png", content: "Elegant set of two pens.", price: 799 }
                ]
            },
            {
                name: "Plastic Pen",
                image: "/assets/plasticpen.png",
                price: 3.49,
                products: [
                    { name: "Basic Plastic Pen", image: "/assets/pens/pen (4).png", content: "Affordable and lightweight writing pen.", price: 49 },
                    { name: "Colorful Plastic Pen", image: "/assets/pens/pen (5).png", content: "Vibrant and smooth ink flow.", price: 79 },
                    { name: "Branded Plastic Pen", image: "/assets/pens/pen (6).png", content: "Custom branding available.", price: 99 },
                    { name: "Transparent Body Pen", image: "/assets/pens/pen (8).png", content: "Modern and sleek design.", price: 129 },
                    { name: "Soft Grip Plastic Pen", image: "/assets/pens/pen (11).png", content: "Comfortable grip for long writing sessions.", price: 149 }
                ]
            },
            {
                name: "File & Folder",
                image: "/assets/filefolder1.png",
                price: 6.99,
                products: [
                    { name: "Peeplvalue Laminated Cobra File", image: "/assets/folder/peeplvalue_cobra_file.png", content: "Pack of 12 | 540 GSM FS Size File Binders | Professional File Folders for Certificate Documents & Invoices", price: 15.99 },
                    { name: "Peeplvalue A4 Multicolour Cobra File Folder", image: "/assets/folder/peeplvalue_multicolor_cobra.png", content: "Pack of 96 | A4 Size | Ideal for Documents, Files, Certificates & Papers", price: 18.99 },
                    { name: "Plastic File Folder", image: "/assets/folder/plastic_file_folder.png", content: "Poly Envelope Expanding File Wallet with Snap Button Closure | Legal Size | 5 Pack | Waterproof Accordion File", price: 12.49 },
                    { name: "Transparent Report File Folder", image: "/assets/folder/transparent_report_folder.png", content: "10 Pcs | A4 Paper with Plastic Clipboard Folder | FS Size | Ideal for Certificates & Document Organization", price: 10.99 },
                    { name: "Plastic Strip File Folder", image: "/assets/folder/plastic_strip_folder.png", content: "Transparent A4 Sliding Bar Report Covers | Multicolored | Pack of 10", price: 9.99 },
                    { name: "Corslet File Folders", image: "/assets/folder/corslet_file_folder.png", content: "A4 Letter Size | 5 Pocket Certificate File Organizer | Portable Expanding File Folder", price: 14.99 },
                    { name: "Folder File A4 Size Transparent", image: "/assets/folder/folder_file_a4.png", content: "Clear Document Holder | Paper Holder Organizer | Pack of 12 | Thickness 12C", price: 11.99 },
                    { name: "A4 Document Folder", image: "/assets/folder/kobrafile (1).jpg", content: "Ideal for organizing documents in offices and schools.", price: 199 },
                    { name: "Expandable Folder", image: "/assets/folder/kobrafile (2).jpg", content: "Multiple compartments for better document storage.", price: 349 },
                    { name: "Button Closure Folder", image: "/assets/folder/kobrafile (3).jpg", content: "Secure button closure to keep documents safe.", price: 249 },
                    { name: "Leather Office File", image: "/assets/folder/kobrafile (4).jpg", content: "Professional leather finish for executives.", price: 799 },
                    { name: "Transparent Folder", image: "/assets/folder/kobrafile (5).jpg", content: "See-through folder for quick access to documents.", price: 149 },
                    { name: "Corporate Document File", image: "/assets/folder/kobrafile (6).jpg", content: "Perfect for corporate meetings and presentations.", price: 499 },
                    { name: "Premium Executive File", image: "/assets/folder/kobrafile (7).jpg", content: "Luxury finish with a professional touch.", price: 899 },
                    { name: "Zipper Closure File", image: "/assets/folder/kobrafile (8).jpg", content: "Zipper closure ensures safety and organization.", price: 399 },
                    { name: "Plastic File Folder", image: "/assets/folder/kobrafile (9).jpg", content: "Lightweight and water-resistant document holder.", price: 299 },
                    { name: "Portfolio File", image: "/assets/folder/kobrafile (10).jpg", content: "Ideal for job interviews and business presentations.", price: 699 },
                    { name: "Clip File", image: "/assets/folder/kobrafile (11).jpg", content: "Strong metal clip to hold documents firmly.", price: 349 }
                ]
            },
            {
                name: "Kobra File",
                image: "/assets/kobrafile.png",
                price: 4.99,
                products: [
                    { name: "Kobra File", image: "/assets/kobrafile/kobrafile (1).jpg", content: "Durable file for organizing documents.", price: 4.99 }
                ]
            },
            {
                name: "Paper File Folder",
                image: "/assets/paperfile.png",
                price: 5.99,
                products: [
                    { name: "Paper File Folder", image: "/assets/paperfilefolder/folder (1).png", content: "Eco-friendly paper file folder for document organization.", price: 2.99 }
                ]
            },
            {
                name: "Handbill",
                image: "/assets/handbill.png",
                price: 2.99,
                products: [
                    { name: "Promotional Handbill", image: "/assets/handbill/handbill (1).png", content: "High-quality handbills for promotions and advertisements.", price: 299 },
                    { name: "Custom Handbill", image: "/assets/handbill/handbill (2).png", content: "Customizable handbills for marketing and branding.", price: 349 },
                    { name: "Business Handbill", image: "/assets/handbill/handbill (3).png", content: "Ideal for business promotions and campaigns.", price: 399 }
                ]
            },
            {
                name: "Lanyard and ID Card",
                image: "/assets/lanyardid.png",
                price: 4.99,
                products: [
                    { name: "Printed Lanyard", image: "/assets/lanyard/lanyard (1).png", content: "Durable printed lanyards for employees and students.", price: 99 },
                    { name: "Plain Lanyard", image: "/assets/lanyard/lanyard (2).png", content: "Basic lanyard with a secure hook.", price: 79 },
                    { name: "Custom Logo Lanyard", image: "/assets/lanyard/lanyard (3).png", content: "Customized lanyards for corporate branding.", price: 129 },
                    { name: "ID Card Holder", image: "/assets/lanyard/lanyard (4).png", content: "Transparent and sturdy card holder.", price: 49 },
                    { name: "Retractable Badge Reel", image: "/assets/lanyard/lanyard (5).png", content: "Convenient for easy ID access.", price: 149 },
                    { name: "Lanyard with Card Set", image: "/assets/lanyard/lanyard (6).png", content: "Complete set including ID card and holder.", price: 199 }
                ]
            },
            {
                name: "Attendance Registers",
                image: "/assets/register.png",
                price: 6.99,
                products: [
                    { name: "Attendance Register", image: "/assets/registers/attendance_register.png", content: "200 Pages | 19x32 cm | Hardbound | 31 Days Format | Ideal for Corporations, Institutions, Offices & Schools | Quire 4 | Pack of 1", price: 10.99 },
                    { name: "NIRMAL SONS Attendance Register", image: "/assets/registers/nirmal_sons_register.png", content: "80 GSM Ledger Paper | Attendance Register for Offices & Schools | 31 x 19 cm (60 Pages)", price: 8.99 },
                    { name: "NEELGAGAN Attendance Book", image: "/assets/registers/neelgagan_register.png", content: "31 Days No.1 Ordinary Binding | Register Size (19.0cm X 32.0cm) '16x26' | Pack of 2", price: 14.99 },
                    { name: "LRS Hotel Register", image: "/assets/registers/lrs_hotel_register.png", content: "Medium Size - 10 * 15 Inch | 120 GSM Thick Paper | Leather Binding | 100 Pages | 1200 Entries", price: 19.99 },
                    { name: "Visitor Register Book", image: "/assets/registers/visitor_register.png", content: "50 Sheets | 100 Pages | for Flat/House/Office/School/Factory | Hard Bound", price: 12.49 }
                ]
            }
        ]
    },
    {
        name: "Awards",
        subcategories: [
            {
            name: "Trophy",
            image: "/assets/trophy.png",
            price: 1500,
            products: [
                { name: "Gold Star Trophy", image: "/assets/trophy/trophy (1).png", content: "Elegant gold star trophy for excellence awards.", price: 1500 },
                { name: "Victory Cup Trophy", image: "/assets/trophy/trophy (3).png", content: "Premium victory cup for sports and corporate events.", price: 2200 },
                { name: "Achievement Award Trophy", image: "/assets/trophy/trophy (4).png", content: "Sleek and modern award trophy for achievements.", price: 1800 },
                { name: "Classic Gold Trophy", image: "/assets/trophy/trophy (5).png", content: "Traditional gold-plated trophy for various occasions.", price: 2500 },
                { name: "Star Performer Trophy", image: "/assets/trophy/trophy (6).png", content: "A prestigious trophy for recognizing top performers.", price: 2000 },
                { name: "Champion Trophy", image: "/assets/trophy/trophy (9).png", content: "Elegant champion trophy for outstanding contributions.", price: 2700 },
                { name: "Premium Recognition Trophy", image: "/assets/trophy/trophy (14).png", content: "High-quality award trophy with a premium finish.", price: 3000 }
            ]
            },
            {
            name: "Badges",
            image: "/assets/badges.png",
            price: 300,
            products: [
                { name: "Badge - Achievement", image: "/assets/badges.png", content: "Achievement badge for excellence and recognition.", price: 300 }
            ]
            },
            {
            name: "Wooden Trophy",
            image: "/assets/woodentrophy.png",
            price: 1800,
            products: [
                { name: "Wooden Excellence Trophy", image: "/assets/trophy/trophy (2).png", content: "Stylish wooden trophy for professional awards.", price: 1800 },
                { name: "Wooden Shield Trophy", image: "/assets/trophy/trophy (7).png", content: "Classic shield-shaped wooden trophy.", price: 2100 },
                { name: "Prestige Wooden Trophy", image: "/assets/trophy/trophy (8).png", content: "Premium wooden trophy with gold accents.", price: 2500 },
                { name: "Grand Recognition Wooden Trophy", image: "/assets/trophy/trophy (10).png", content: "Elegant wooden trophy for corporate recognition.", price: 3000 },
                { name: "Signature Wooden Trophy", image: "/assets/trophy/trophy (11).png", content: "Signature wooden trophy with intricate design.", price: 2800 },
                { name: "Exclusive Wooden Trophy", image: "/assets/trophy/trophy (12).png", content: "High-end wooden trophy for prestigious awards.", price: 3500 },
                { name: "Honorary Wooden Trophy", image: "/assets/trophy/trophy (13).png", content: "Wooden trophy designed for lifetime achievements.", price: 3200 }
            ]
            },
            {
            name: "Other Awards",
            image: "/assets/trophy2.png",
            price: 3999,
            products: [
                { name: "Crystal Award", image: "/assets/trophy2/trophy2 (1).png", content: "Elegant crystal award for special recognition.", price: 3999 },
                { name: "Glass Plaque", image: "/assets/trophy2/trophy2 (2).png", content: "Premium glass plaque for corporate awards.", price: 4500 },
                { name: "Metal Medal", image: "/assets/trophy2/trophy2 (3).png", content: "High-quality metal medal for competitions.", price: 2500 },
                { name: "Custom Engraved Award", image: "/assets/trophy2/trophy2 (4).png", content: "Personalized engraved award for special occasions.", price: 5000 }
            ]
            }
        ]
    }
]


module.exports = allproducts;