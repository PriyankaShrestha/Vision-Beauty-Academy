import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../styles/courses.module.css';

const coursesData = [
    {
        mainType: 'Mini Beauty Course Overview',
        price: 'Rs 30,000 only',
        description: 'Our Mini Beauty Course offers a comprehensive introduction to various beauty treatments and hairstyling techniques. Perfect for beginners or those looking to enhance their skills in a shorter timeframe.',
        duration: '3 Months',
        included: [
            'Hair Care',
            {
                includes:
                [
                    'Hair Shampoo',
                    'Hair Oil Massage',
                    'Hair Treatment',
                    'Hair Updo & Styling',
                    'Apple Nut',
                    'Cross Nut',
                    'French Nut',
                    'Bridal Nut',
                    'Royal Neck Nut',
                    'Long Apple Nut',
                    'Bow Nut',
                    'Braiding Hair Band',
                    'Hair Puff',
                    'Hair Iron',
                    'Hair Curl',
                    'Hair Fixing',
                ]
            },
            'Hair Cutting Techniques',
            {
                includes:
                [
                    'Straight Cut',
                    'U Cut',
                    'V Cut',
                    'Saggy Cut',
                    'Reverse Cut',
                    'Step Cut',
                    'A Line Cut',
                ]
            },
            'Hair Coloring and Styling',
            {
                includes:
                [
                    'Hair Colour',
                    'Hair Highlight',
                    'Hair Straightening',
                    'Hair Perming',
                ]
            },
            'Hair Removal',
            {
                includes:
                [
                    'Threading',
                    'Waxing',
                ]
            },
            'Nail and Hand Care',
            {
                includes:
                [
                    'Manicure / Pedicure',
                    'Hand Massage',
                ]
            },
        ],
    },
    {
        mainType: 'Max Beauty Course Overview',
        price: 'Rs 70,000',
        description: 'Our Max Beauty Course is designed for those seeking an in-depth understanding of various beauty treatments, hairstyling techniques, and makeup artistry. Perfect for individuals aiming to become professional beauty experts.',
        duration: '6 Months',
        included: [
            'Makeup',
            {
                includes:
                [
                    'Simple Makeup',
                    'Party Makeup',
                    'Bridal Makeup (Detailed Makeup Techniques)',
                    'Blow',
                    'Crease Line',
                    'Shadow Application',
                    'Blending Effect',
                    'Control Highlight',
                    'Base Making (Nose, Lips, Open Part Touch-Up)',
                ]
            },
            'Facial Treatments',
            {
                includes:
                [
                    'Facial according to Skin',
                    'Cleansing',
                    'Normal Facia',
                    'Veg Peel Facial',
                    'Thermo Herb Facial',
                    'Tan Facial',
                    'Collagen Facial',
                    'Salvanic',
                    'High Frequency',
                    'Ultra Sonic',
                ]
            },
            'Hair Care and Styling',
            {
                includes:
                [
                    'Hair Shampoo',
                    'Hair Oil Massage',
                    'Hair Treatment',
                    'Hair Updo & Styling',
                    'Apple Nut',
                    'Cross Nut',
                    'French Nut',
                    'Bridal Nut',
                    'Royal Neck Nut',
                    'Long Apple Nut',
                    'Bow Nut',
                    'Braiding Hair Band',
                    'Hair Puff',
                    'Hair Iron',
                    'Hair Curl',
                    'Hair Fixing',
                    'Korean Cut',
                    'Thai Cut',
                    'Ladies Boy Cut',
                    'Mushroom Cut',
                    'Nilon Cut',
                    'Volume Lesser',
                    'Cut',
                    'A-Line',
                    'Cross Layer Cut',
                    'Layer Bob Cut',
                ]
            },
            'Hair coloring and highlights',
            {
                includes:
                [
                    'Hair Colour',
                    'Hair Highlight',
                    '3 Foil Highlight',
                    'Global Highlight',
                    'Half Head Highlight',
                    'Multi Highlight',
                ]
            },
            'Hair treatments',
            {
                includes:
                [
                    'Hair Straightening',
                    'Hair Perming',
                    'Hair Smoothing',
                    'Blow Dry Setting',
                ]
            },
        ],
    },
    {
        mainType: 'Full Beauty Course Overview',
        price: 'Rs 90,000',
        description: 'Our Full Beauty Course is a comprehensive program covering a wide range of beauty treatments, hairstyling techniques, and makeup artistry. Ideal for individuals aspiring to become proficient beauty professionals.',
        duration: '9 Months',
        included: [
            'Hair updo & styling',
            {
                includes:
                [
                    'Apple Nut',
                    'Cross Nut',
                    'Cover French Nut',
                    'Hemani Nut',
                    'Neck Nut with Bow',
                    'Bridal Nut',
                    'Royal Neck Nut',
                    'Neck Nut with Ringing',
                    '3 Apple Nut',
                    'Modern Bridal Nut',
                    'Rose Model Nut',
                    'Twisting Side and Round',
                    'Long Apple Nut',
                    'Bow Nut',
                    'Braiding Hair Band',
                    'Hair Puff',
                    'Hair Iron',
                    'Hair Curl',
                    'Hair Fixing',
                    'Rod Curl',
                ]
            },
            'Hair removal',
            {
                includes:
                [
                    'Threading',
                    'Waxing',
                    'Painless Waxing',
                ]
            },
            'Hair Care',
            {
                includes:
                [
                    'Hair Shampoo',
                    'Hair Oil Massage',
                    'Hair Treatment',
                    'Henna Pack',
                ]
            },
            'Facial Treatments',
            {
                includes:
                [
                    'Facial According to Skin',
                    'Cleansing',
                    'Normal Facial',
                    'Veg Peel Facial',
                    'Thermo Herb Facial',
                    'Tan Facial',
                    'Collagen Facial',
                    'Salvanic',
                    'High Frequency',
                    'Ultra Sonic',
                ]
            },
            'Hair cutting',
            {
                includes:
                [
                    'Hair Cut',
                    'Straight Cut',
                    'U Cut',
                    'V Cut (Slide Cut)',
                    'Half Feather',
                    'Full Feather',
                    'Saggy Cut',
                    'Reverse Cut',
                    'Step Cut',
                    'A Line Cut',
                    'Korean Cut',
                    'Thai Cut',
                    'Ladies Boy Cut',
                    'Mushroom Cut',
                    'Nilon Cut',
                    'Volume Lesser Cut',
                    'A-Line',
                    'Cross Layer Cut',
                    'Layer Bob Cut',
                ]
            },
            'Additional',
            {
                includes:
                [
                    'Indian Mehendi',
                    'Basic Nail Art',
                    'Cutting Theory',
                    'Blow Dry Setting',
                ]
            },
            'Makeup',
            {
                includes:
                [
                    'Simple Makeup',
                    'Party Makeup',
                    'Bridal Makeup (Detailed Makeup Techniques)',
                    'Blow',
                    'Crease Line',
                    'Shadow Application',
                    'Blending Effect',
                    'Control Highlight',
                    'Base Making (Nose, Lips, Open Part Touch-Up)',
                ]
            },
            'Nail & hand Care',
            {
                includes:
                [
                    'Nail Filling',
                    'Nail Polishing',
                    'Manicure/Pedicure',
                    'Normal Manicure/Pedicure',
                    'Deluxe Manicure/Pedicure',
                    'Luxury Manicure/Pedicure',
                    'Spa Manicure/Pedicure',
                    'Hand Massage',
                ]
            },
        ],
    },
    {
        mainType: 'Advance Beauty Course Overview',
        price: 'Rs 35,000 only',
        description: 'Our Advance Beauty Course is designed to take your beauty skills to a professional level. It covers advanced techniques in beauty treatments, hairstyling, and makeup, perfect for those who want to become top beauty experts.',
        duration: '3 Months',
        included: [
            'Advanced facial treatment',
            {
                includes:
                [
                    'Thermoherb Facial',
                    'Veg Facial',
                    'Detan Facial',
                    'Korean Facial',
                    'Collagen Facial',
                    'Gold Peel-Off Mask Facial',
                ]
            },
            'Advanced hair styling and Cutting',
            {
                includes:
                [
                    'Blow dry setting',
                    'Special hair cutting15 types)',
                    'Special hair updos/juro(20 types)',
                ]
            },
            'Nail and hand care',
            {
                includes:
                [
                    'Spa manicure and pedicure',
                ]
            },
            'Hair treatment',
            {
                includes:
                [
                    'Hair Extensions',
                    'Hair Coloring',
                    'Global Highlights',
                    'Multi Highlights',
                ]
            },
        ],
    },
    {
        mainType: 'Diploma in Beauty Overview',
        price: 'Rs 35,000 only',
        description: 'Our Diploma in Beauty is a comprehensive 3-month program designed to provide in-depth knowledge and skills in beauty treatments, hair care, and styling. Ideal for those who wish to establish a strong foundation in the beauty industry.',
        duration: '3 Months',
        included: [
            'Hair coloring',
            {
                includes:
                [
                    'Hair Color Theory',
                    'Hair Coloring with Pre-lightening',
                    'Hair Highlights and Multi-highlights',
                ]
            },
            'Hair treatment and styling',
            {
                includes:
                [
                    'Hair Straightening',
                    'Hair Treatment for Damaged Hair',
                    'Hair Shampoo',
                    'Henna Pack',
                    'Hair Treatments',
                    'Blow Dry Setting',
                    'Hair Iron',
                    'Hair Curl',
                    'Roller Setting',
                    'Hair Perming',
                    'Hair Fixing',
                ]
            },
            'Nail and hand care',
            {
                includes:
                [
                    'Deluxe Manicure and Pedicure',
                    'Nail Shaping',
                    'Nail Polishing',
                ]
            },
            'Facial treatment',
            {
                includes:
                [
                    'Facials for Different Skin',
                    'Types',
                    'Skin Treatments',
                    'Face Bleach',
                ]
            },
            'Hair cutting',
            {
                includes:
                [
                    'Special Cutting (16 types)',
                ]
            },
            'Advance service',
            {
                includes:
                [
                    'Hair extension',
                ]
            },
            'Hair updos juro',
            {
                includes:
                [
                    'Neck Juro',
                    'Neck Juro with Bow',
                    'Bow Juro',
                    'Modern Bridal Juro',
                    '3 Apple Juro',
                    '7 Part Juro',
                    'Bridal Juro',
                    'Official Juro',
                    'Himani Juro',
                ]
            },
            'Makeup artistry',
            {
                includes:
                [
                    'Bridal makeup( 3 days classnodetail',
                ]
            },
        ],
    },
    {
        mainType: 'Basic In Beauty Overview',
        price: 'Rs 15,000 only',
        description: 'Our Basic in Beauty course is a 1-month program designed to introduce foundational beauty skills and techniques. This course is ideal for beginners looking to start a career in the beauty industry.',
        duration: '1 Months',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Apple Juro',
                    'Cross Juro',
                    'French Juro',
                    'Bridal Juro',
                    'Newari Bridal Juro',
                ]
            },
            'Hair cutting',
            {
                includes:
                [
                    'Straight Cut',
                    'U Cut',
                    'Thigh Cut',
                    'Mushroom Cut',
                    'Reverse Cut',
                ]
            },
            'Hair coloring and styling',
            {
                includes:
                [
                    'Hair Coloring',
                    'Hair Highlights',
                    'Hair Iron',
                ]
            },
            'Nail and skin care',
            {
                includes:
                [
                    'Manicure',
                    'Cleansing',
                    'Facial',
                    'Oil Massage',
                ]
            },
            'Hair removal',
            {
                includes:
                [
                    'Threading',
                    'Waxing',
                ]
            },
            'Theory',
            {
                includes:
                [
                    'Basic beauty theory',
                ]
            },
        ],
    },
    {
        mainType: 'Makeup Course Overview',
        description: 'Our makeup courses cater to all skill levels, from beginners to aspiring professionals. Choose from our 7-day Self Makeup Course to enhance your personal grooming skills, the 30-day Professional Makeup Course to master advanced techniques for a career in makeup artistry, or the 45-day Special Makeup Course to specialize in a wide range of styles and concepts.',
        included: []
    },
    {
        mainType: 'Self Makeup Course Overview',
        price: 'Rs 5,000 only',
        duration: '7 days',
        included: [
            'Makeup techniques',
            {
                includes:
                [
                    'Eyebrow Shaping',
                    'Crease Line',
                    'Shadow Playing Effects',
                    'Eye Lifting',
                    'Nose Shaping',
                    'Face Cutting with Highlights and Contouring',
                    'Base Making with Custom Blending',
                    'Blusher Application',
                    'Lip Shaping',
                    'Open Part Touch-Up',
                ]
            },
            'Makeup styles',
            {
                includes:
                [
                    'Natural Makeup',
                    'Nude Look Makeup',
                    'Day Party Makeup',
                    'Night Party Makeup',
                    'Model Makeup',
                    'Arabic Eye Makeup',
                    'Foxy Eye Makeup',
                    'Halo Makeup'
                ]
            },
        ]
    },
    {
        mainType: 'Professional Makeup Overview',
        price: 'Rs 30,000 only',
        duration: '1 Months',
        included: [
            'Makeup techniques',
            {
                includes:
                [
                    'Eyebrow Shaping',
                    'Crease Line',
                    'Face Cutting with Highlight and Contouring',
                    'Base Making',
                    'Blusher Application',
                    'Lip Shaping'
                ]
            },
            'Makeup styles',
            {
                includes:
                [
                    'Natural Looking Makeup',
                    'Nude Looking Makeup',
                    'Day Party Makeup',
                    'Night Party Makeup',
                    'Bridal Makeup',
                    'Halo Makeup'
                ]
            },
        ]
    },
    {
        mainType: 'Special Makeup Overview',
        price: 'Rs 45,000 only',
        duration: '45 days',
        included: [
            'Makeup techniques',
            {
                includes:
                [
                    'Eyebrow Shaping',
                    'Crease Line',
                    'Face Cutting with Highlight and Contouring',
                    'Base Making',
                    'Blusher Application',
                    'Lip Shaping'
                ]
            },
            'Makeup styles',
            {
                includes:
                [
                    'Nude Looking Makeup',
                    'Day Party Makeup',
                    'Night Party Makeup',
                    'Bridal Makeup',
                    'Halo Makeup',
                    'Arabic Makeup',
                    'Photoshoot Makeup',
                    'Old Age Makeup',
                    'Creative Makeup'
                ]
            },
            'Additional',
            {
                includes:
                [
                    'Theory'
                ]
            },
        ]
    },
    {
        mainType: 'Basic hair designing Overview',
        price: 'Rs 15,000 only',
        description: 'Our Basic Hair Designing Course is a foundational program focused on introducing participants to fundamental hair styling techniques. This course providesn hands-on training in creating various hairstyles, perfect for beginners in the field of hairdressing.',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Quick Royal Juro',
                    'Twist Royal Juro',
                    'Messy Hairstyle',
                    'Frozen Hairstyle',
                    'Twisting Royal Juro with Ribs',
                    'Tiny Flower Royal Bun',
                    'Party Hairstyle with Ribs',
                    'and Nut',
                    'Party Hairstyle with Ribs',
                    'Roses Hairstyle with Ribs',
                    'Frozen with Roses and Ribs'
                ]
            },
        ]
    },
    {
        mainType: 'Hair dresser course Overview',
        price: 'Rs 35,000 only',
        description: 'Our Hair Dresser Course is a comprehensive 25-day program designed to provide handson training in various aspects of hairdressing.',
        duration: '25 days',
        included: [
            'Hair Cutting (16 Types)',
            {
                includes:
                [
                    'Straight Cut',
                    'U Cut',
                    'Korean Cut',
                    'V Cut',
                    'Half Feather Cut',
                    'Full Feather Cut',
                    'Step Cut',
                    'Reverse Cut',
                    'Cross Layer Cut',
                    'A-Line Bob Cut',
                    'Thai Cut',
                    'Nilan Cut',
                    'Mushroom Cut',
                    'Volume Lesser Cut',
                    'Ladies Boy Cut',
                    'Wolf Cut',
                    'Blow Dry Setting',
                    'Hair Theory',
                    'Hair Straightening',
                    'Hair Coloring',
                    'Hair Highlights',
                    'Multi Highlights',
                    'Prelight with Color',
                    'Hair Perming',
                    'Hair Extension'
                ]
            },
        ]
    },
    {
        mainType: 'Master in Hair Designing',
        price: 'Rs 40,000 only',
        description: 'Our Master in Hair Designing course is an intensive 1-month program aimed at honing advanced hair styling skills. This course covers a wide array of intricate hairstyles and updos, perfect for those aspiring to become experts in hair design.',
        duration: '1 Months',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Royal Juro',
                    'Twist Royal Juro',
                    'Messy Hairstyle',
                    'Frozen Hairstyle',
                    'Twisting Royal Juro with Ribs',
                    'Tiny Flower Royal Bun',
                    'Simple Fan Bun with Ribs',
                    'Simple Bubble Party Bun',
                    'Party Hairstyle with Ribs and Nut',
                    'Party Hairstyle with Ribs',
                    '3 Rose with Nut',
                    'Full Rose and Ribs',
                    'One Rose with Ribs',
                    'Model Wave Bun',
                    'High Christian Bride with Rose',
                    'High Christian Bride with Rose and Ribs',
                    'Frozen with Ribs',
                    'Frozen with Ribs and Flower',
                    'Simple Frozen',
                    'Russian Bun with 3 Roses and Wave',
                    'Pony with Cross Ribs',
                    'Heavy Party Bun with Flower Wave',
                    'Royal Bridal Bun with Diagonal Ribs',
                    'Creative Royal Juro',
                ]
            },
        ]
    },
    {
        mainType: 'Blowdry setting course',
        price: 'Rs 8,000 only',
        description: 'Our Blow Dry Setting Course is designed to teach a variety of blow-drying techniques that create different styles and finishes.',
        duration: '7 days',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Voluming Techniques',
                    'In Curls',
                    'Out Curls',
                    'Straight Blow Dry',
                    'Bangs Setting',
                ]
            },
        ]
    },
    {
        mainType: 'Hair Chemical course',
        price: 'Rs 30,000 only',
        description: 'Our Hair Chemical Course is an intensive 15-day program designed to teach advanced hair coloring and styling techniques.',
        duration: '15 days',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Hair Color with Highlights',
                    'Ombre Technique',
                    'Balayage Technique',
                    'Money Piece Technique',
                    'Ash Color Technique',
                    'Rainbow Color Technique',
                    'Blow Dry Setting',
                    'Theory of Hair',
                    'Plex Technique',
                ]
            },
        ]
    },
    {
        mainType: 'Basic gel nail extension course',
        price: 'Rs 10,000 only',
        description: 'Our Basic Gel Nail Extension Course is a 7-day program designed to provide comprehensive training in gel nail extension techniques. Participants will learn essential skills and methods to create beautiful and durable gel nail extensions.',
        duration: '7 days',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Gel Nail Extension',
                    'French Nail Polishing System',
                    'Glitter Gel Nail',
                    'Gel Polish',
                    'Overlay Gel Extension',
                    'Ombre Color',
                    'Fake Nail Extension',
                    'Two Types of Nail Art',
                ]
            },
        ]
    },
    {
        mainType: 'Gel and acrylic nail extension',
        price: 'Rs 25,000 only',
        description: 'Our Gel and Acrylic Nail Extension Course is a comprehensive 15-day program designed to provide thorough training in both gel and acrylic nail extension techniques.',
        duration: '15 days',
        included: [
            'Gel nail extension',
            {
                includes:
                [
                    'French Nail Polishing System',
                    'Glitter Gel Nail',
                    'Color Gel Nail Extension',
                    'Overlay Gel Extension',
                    'Ombre Color',
                    '10 Types of Nail Art',
                ]
            },
            'Acrylic nail extension',
            {
                includes:
                [
                    'Cat Eye',
                    'Chrome',
                    'French and Acrylic',
                    'Marble Nail Art',
                    'Sticker Nail Art',
                ]
            },
        ]
    },
    {
        mainType: 'Master in nail extension',
        price: 'Rs 45,000 only',
        description: 'Our Master in Nail Extension Course is an extensive 45-day program meticulously crafted to train participants in advanced nail extension techniques and intricate nail artistry.',
        duration: '1 Months',
        included: [
            'Gel nail extension',
            {
                includes:
                [
                    'Glitter Gel Nail',
                    'Color Gel Nail Extension',
                    'Overlay Gel Extension',
                    'Ombre Color',
                    '15 Types of Nail Art using Lid',
                    'Brush',
                    'Cat Eye',
                    'Chrome',
                    'Marble',
                    'Sticker',
                    '3D Acrylic Nail Art',
                    '3D Gel Nail Art',
                    '4D Gel Art',
                    'Gum Gel Nail Extension',
                ]
            },
            'Additional techique',
            {
                includes:
                [
                    'Sponge Ombre',
                    'Fake Nail',
                    'Dotting Shapes',
                ]
            },
            'Acrylic nail extension',
            {
                includes:
                [
                    'French Acrylic Nail',
                    'Sculpture Nail Extension',
                    'French Sculpture Nail',
                    'Extension',
                ]
            },
        ]
    },
    {
        mainType: 'Eyelash extension course',
        price: 'Rs 10,000 only',
        description: 'Our Eyelash Extension Course is a comprehensive 7-day program designed to train individuals in the art of applying eyelash extensions. This course covers various techniques and styles to enhance and beautify the natural lashes.',
        duration: '7 days',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Natural Eyelash Extension',
                    'Classic Eyelash Extension',
                    'Hybrid Eyelash Extension',
                    'Volume Eyelash ExtensionWispy',
                    'Eyelash Extension',
                    'Mega Volume Eyelash Extension',
                ]
            },
        ]
    },
    {
        mainType: 'Eyelash perming course',
        price: 'Rs 5,000 only',
        description: 'Our Eyelash Perming Course is a concise 3-day program designed to teach the art of eyelash perming. This course covers essential techniques to create beautiful, curled lashes that last. Ideal for beauty professionals looking to expand their skill set, participants will learn proper application methods, safety protocols, and aftercare tips to ensure high-quality results for their clients.',
        duration: '3 days',
        included: []
    },
    {
        mainType: 'Basic Abroad Course Overview',
        price: 'Rs 10,000 only',
        description: 'Our Basic Abroad Course is a 15-day program designed for individuals aiming to enhance their beauty skills and pursue opportunities abroad.',
        duration: '15 days',
        included: [
            'Hair Updos (Juro)',
            {
                includes:
                [
                    'Threading',
                    'Waxing',
                    'Manicure and Pedicure',
                    'Cleansing',
                    'Facial',
                    'Nail Shaping',
                    'Nail Polishing',
                ]
            },
        ]
    },
    {
        mainType: 'Special Abroad Course Overview',
        price: 'Rs 30,000 only',
        description: 'This course combines 15 days of essential beauty training with 15 days of specialized Mehendi instruction, providing participants with a versatile skill set.',
        duration: '1 Months',
        included: [
            '15-Day Basic Abroad Beauty Course',
            '15-Day Mehendi Course'
        ]
    },
    {
        mainType: 'Advance Abroad Course Overview',
        price: 'Rs 55,000 only',
        description: 'This course combines 15 days of essential beauty training with 45 days of specialized nail technician instruction, equipping participants with a diverse and professional skill set.',
        duration: '2 Months',
        included: [
            '15-Day Basic Abroad Beauty Course',
            '45-Day Nail Technician Course'
        ]
    },
    {
        mainType: 'Nail Technician Course',
        included: [
            'Gum Gel Nail Extension',
            'French Sculpture Tip Gel',
            'Nail Extension',
            'French Gel Tip Nail Extension',
            'Gel Nail Extension with',
            'Gel Polish',
            'Glitter Gel Nail Tip',
            'Color Gel Nail Tip',
            'French Polishing System',
            'Sculpture',
            'Natural Nail Overlay',
            'French Sculpture Tips Gel',
            'Nail Extension',
            'French Acrylic Tip Nail Extension',
            'Acrylic Nail Extension with',
            'Gel Polish',
            'Glitter Acrylic Nail Tip',
            'Color Gel Nail Tip',
            'Fake Nail Extension',
        ]
    },
    {
        mainType: 'Mehendi course',
        price: 'Rs 15,000 only',
        description: 'Our Mehendi Course is a specialized 15-day program designed to teach the art of traditional Indian Mehendi.',
        duration: '15 days',
        included: [
            'All Types of Indian Mehendi',
            'Basic Arts Mehendi Designing',
            'Concept Creating',
            'One Line Design',
            'Indian Cone Making and Filling',
            'Bridal Mehendi',
            'Figure Mehendi'
        ]
    },
    {
        mainType: 'Threading course',
        price: 'Rs 2,500 only',
        description: 'Our Threading Course is a focused 3-day program designed to teach the art of threading with a specialization in different types of eyebrow shaping.',
        duration: '3 days',
        included: [
            'Different Types of Eyebrow Shaping',
            'Theory of Threading',
            'Practical Application'
        ]
    },
    {
        mainType: 'Manicure / Pedicure course',
        price: 'Rs 5,000 only',
        description: 'Our Manicure and Pedicure Course is a 7-day program designed to provide comprehensive training in nail and foot care.',
        duration: '7 days',
        included: [
            'Hand Massage',
            'Normal Manicure and Pedicure',
            'Deluxe Manicure and Pedicure',
            'Spa Manicure and Pedicure'
        ]
    },
    {
        mainType: 'Micro-blading course',
        price: 'Rs 50,000 only',
        description: 'Our Microblading Course is an intensive 15-day program designed to teach advanced techniques in semi-permanent makeup.',
        duration: '15 days',
        included: [
            'Micro blading',
            'Micro shading',
            'Lip color'
        ]
    },
    {
        mainType: 'Special haircut course',
        price: 'Rs 15,000 only',
        description: 'Our Special Haircut Course is an intensive 15-day program focused on mastering various haircutting techniques. This course is ideal for those looking to specialize in haircuts and expand their hairstyling skills.',
        duration: '15 days',
        included: [
            'Straight Cut',
            'U Cut',
            'Korean Cut',
            'V Cut (Slice Cut)',
            'Half Feather Cut',
            'Full Feather Cut',
            'Step Cut',
            'Reverse Cut',
            'Cross Layer Cut',
            'A-Line Bob Cut',
            'Layer Bob Cut',
            'Thai Cut',
            'Nilan Cut',
            'Mushroom Cut',
            'Volume Lesser Cut',
            'Ladies Boy Cut',
            'Bangs',
            'Wolf Cut',
            'Butterfly Cut'
        ]
    },
    {
        mainType: 'Combo Course Overview',
        price: 'Rs 3,00,000 only',
        description: 'Special Offer is provided for this course where you can get upto 50% off. Our Combo Beauty Course is an all-inclusive 12-month program designed to provide comprehensive training in various beauty disciplines. This course covers all the essential and advanced beauty skills and techniques, making it ideal for individuals seeking to become well-rounded professionals in the beauty industry.',
        duration: '12 months',
        included: [
            'Includes all the courses'
        ]
    }
];

export default function Gallery() {
    return(
        <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            <div className={styles.section}>
            <h1>Our Courses</h1>
            <div className={styles.courseList}>
                {coursesData.map((course, index) => (
                    <div className={styles.courseCard} key={index}>
                        <h2>{course.mainType}</h2>
                        <p><strong>Price Range:</strong> {course.price}</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                        <p>{course.description}</p>
                        <p><strong>What's Included:</strong></p>
                        <ul>
                            {course.included.map((item, idx) => (
                                typeof item === 'string' ? (
                                    <li key={idx}>{item}</li>
                                ) : (
                                    <li key={idx}>
                                        {item.main}
                                        <ul>
                                            {item.includes.map((subItem, subIdx) => (
                                                <li key={subIdx}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </main>
        <Footer />
        </div>
    );
}