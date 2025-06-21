const MENU = {
  veg: {
    starters: [
      { 
        id: 1, 
        name: "Paneer Tikka", 
        price: 180,
        description: "Marinated cottage cheese grilled to perfection",
        tags: ["vegetarian"]
      },
      { 
        id: 2, 
        name: "Hara Bhara Kabab", 
        price: 160,
        description: "Spinach and green pea patties with mild spices",
        tags: ["vegetarian"]
      },
      { 
        id: 3, 
        name: "Corn Chaat", 
        price: 120,
        description: "Sweet corn tossed with tangy spices and chutneys",
        tags: ["vegetarian", "spicy"]
      },
      { 
        id: 4, 
        name: "Mushroom Tikka", 
        price: 170,
        description: "Juicy mushrooms marinated in yogurt and spices",
        tags: ["vegetarian"]
      }
    ],
    mains: [
      { 
        id: 5, 
        name: "Dal Makhani", 
        price: 200,
        description: "Creamy black lentils slow-cooked with butter",
        tags: ["vegetarian"]
      },
      { 
        id: 6, 
        name: "Palak Paneer", 
        price: 220,
        description: "Spinach curry with soft cottage cheese cubes",
        tags: ["vegetarian"]
      },
      { 
        id: 7, 
        name: "Vegetable Biryani", 
        price: 240,
        description: "Fragrant basmati rice with mixed vegetables",
        tags: ["vegetarian"]
      }
    ],
    desserts: [
      { 
        id: 8, 
        name: "Gulab Jamun", 
        price: 80,
        description: "Soft milk dumplings in rose-scented syrup",
        tags: ["vegetarian", "sweet"]
      },
      { 
        id: 9, 
        name: "Rasmalai", 
        price: 90,
        description: "Cottage cheese patties in sweetened milk",
        tags: ["vegetarian", "sweet"]
      },
      { 
        id: 10, 
        name: "Kheer", 
        price: 85,
        description: "Traditional rice pudding with nuts",
        tags: ["vegetarian", "sweet"]
      }
    ]
  },
  "non-veg": {
    starters: [
      { 
        id: 11, 
        name: "Chicken Tikka", 
        price: 220,
        description: "Succulent chicken pieces marinated in spices",
        tags: ["non-vegetarian"]
      },
      { 
        id: 12, 
        name: "Fish Amritsari", 
        price: 250,
        description: "Crispy fried fish with Punjabi spices",
        tags: ["non-vegetarian"]
      },
      { 
        id: 13, 
        name: "Mutton Seekh Kabab", 
        price: 280,
        description: "Minced lamb skewers with aromatic spices",
        tags: ["non-vegetarian", "spicy"]
      },
      { 
        id: 14, 
        name: "Chicken 65", 
        price: 210,
        description: "Spicy deep-fried chicken appetizer",
        tags: ["non-vegetarian", "spicy"]
      }
    ],
    mains: [
      { 
        id: 15, 
        name: "Butter Chicken", 
        price: 280,
        description: "Tender chicken in creamy tomato gravy",
        tags: ["non-vegetarian"]
      },
      { 
        id: 16, 
        name: "Rogan Josh", 
        price: 300,
        description: "Aromatic lamb curry from Kashmir",
        tags: ["non-vegetarian"]
      },
      { 
        id: 17, 
        name: "Chicken Biryani", 
        price: 260,
        description: "Fragrant rice with chicken and spices",
        tags: ["non-vegetarian"]
      }
    ],
    desserts: [
      { 
        id: 18, 
        name: "Phirni", 
        price: 100,
        description: "Ground rice pudding with cardamom",
        tags: ["vegetarian", "sweet"]
      },
      { 
        id: 19, 
        name: "Shahi Tukda", 
        price: 110,
        description: "Bread pudding with reduced milk and nuts",
        tags: ["vegetarian", "sweet"]
      }
    ]
  }
};

export default MENU