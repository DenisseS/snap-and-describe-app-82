
import { Product } from './types';

export const productsDB: Product[] = [
  {
    id: 'broccoli_001',
    name: 'Broccoli',
    nameKey: 'broccoli_001',
    image: '/placeholder.svg',
    rating: 9.2,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Excellent source of protein',
        total: 2.8,
        caloriesFrom: 11.2,
        dailyPercentage: 6,
        healthRanking: 8
      },
      carbs: {
        description: 'Low in carbohydrates',
        total: 6.6,
        caloriesFrom: 26.4,
        dailyPercentage: 2,
        healthRanking: 9
      },
      fats: {
        description: 'Very low in fats',
        total: 0.4,
        caloriesFrom: 3.6,
        dailyPercentage: 1,
        healthRanking: 10
      },
      fiber: {
        description: 'High in fiber',
        total: 2.6,
        caloriesFrom: 0,
        dailyPercentage: 10,
        healthRanking: 9
      },
      calories: {
        description: 'Very low in calories',
        total: 34,
        fromCarbs: 26.4,
        fromProtein: 11.2,
        fromFat: 3.6
      },
      vitamins: ['vitamin_c', 'vitamin_k', 'folate'],
      minerals: ['potassium', 'iron', 'calcium'],
      saturatedFat: 0.1,
      sugar: 1.5,
      sodium: 33,
      cholesterol: 0,
      vitaminC: 89.2,
      calcium: 47,
      iron: 0.7,
      potassium: 316
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh unprocessed food. Raw or cooked vegetable without additives.',
      descriptionKey: 'broccoli_processing_desc',
      indicators: ['Natural food', 'No additives', 'No preservatives', 'Fresh vegetable'],
      indicatorsKeys: ['natural_food', 'no_additives', 'no_preservatives', 'fresh_vegetable']
    },
    otherOptionsIds: ['apple_002', 'spinach_003', 'carrot_004'],
    description: 'Cruciferous vegetable rich in vitamins and minerals',
    descriptionKey: 'broccoli_001'
  },
  {
    id: 'apple_002',
    name: 'Apple',
    nameKey: 'apple_002',
    image: '/placeholder.svg',
    rating: 8.8,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low in protein',
        total: 0.3,
        caloriesFrom: 1.2,
        dailyPercentage: 1,
        healthRanking: 4
      },
      carbs: {
        description: 'Good source of natural carbohydrates',
        total: 14.1,
        caloriesFrom: 56.4,
        dailyPercentage: 5,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.2,
        caloriesFrom: 1.8,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'High in fiber',
        total: 2.4,
        caloriesFrom: 0,
        dailyPercentage: 10,
        healthRanking: 9
      },
      calories: {
        description: 'Low in calories',
        total: 52,
        fromCarbs: 56.4,
        fromProtein: 1.2,
        fromFat: 1.8
      },
      vitamins: ['vitamin_c', 'vitamin_a'],
      minerals: ['potassium'],
      saturatedFat: 0.1,
      sugar: 10.4,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 4.6,
      calcium: 6,
      iron: 0.1,
      potassium: 107
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh fruit without processing. Natural food in its original state.',
      descriptionKey: 'apple_processing_desc',
      indicators: ['Fresh fruit', 'No additives', 'Unprocessed'],
      indicatorsKeys: ['fresh_fruit', 'no_additives', 'unprocessed']
    },
    otherOptionsIds: ['broccoli_001', 'pear_008', 'orange_009'],
    description: 'Sweet and crunchy fruit packed with fiber and natural sugars',
    descriptionKey: 'apple_002'
  },
  {
    id: 'spinach_003',
    name: 'Spinach',
    nameKey: 'spinach_003',
    image: '/placeholder.svg',
    rating: 9.5,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Good source of protein',
        total: 2.9,
        caloriesFrom: 11.6,
        dailyPercentage: 6,
        healthRanking: 8
      },
      carbs: {
        description: 'Very low in carbohydrates',
        total: 3.6,
        caloriesFrom: 14.4,
        dailyPercentage: 1,
        healthRanking: 10
      },
      fats: {
        description: 'Very low in fats',
        total: 0.4,
        caloriesFrom: 3.6,
        dailyPercentage: 1,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.2,
        caloriesFrom: 0,
        dailyPercentage: 9,
        healthRanking: 8
      },
      calories: {
        description: 'Very low in calories',
        total: 23,
        fromCarbs: 14.4,
        fromProtein: 11.6,
        fromFat: 3.6
      },
      vitamins: ['vitamin_k', 'vitamin_a', 'folate', 'vitamin_c'],
      minerals: ['iron', 'magnesium', 'potassium'],
      saturatedFat: 0.1,
      sugar: 0.4,
      sodium: 79,
      cholesterol: 0,
      vitaminC: 28.1,
      calcium: 99,
      iron: 2.7,
      potassium: 558
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: true,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh leafy green vegetable, without processing or additives.',
      descriptionKey: 'spinach_processing_desc',
      indicators: ['Leafy green', 'Superfood', 'No additives'],
      indicatorsKeys: ['leafy_green', 'superfood', 'no_additives']
    },
    otherOptionsIds: ['kale_005', 'broccoli_001', 'brussels_007'],
    description: 'Leafy green vegetable high in iron and vitamins',
    descriptionKey: 'spinach_003'
  },
  {
    id: 'carrot_004',
    name: 'Carrot',
    nameKey: 'carrot_004',
    image: '/placeholder.svg',
    rating: 8.6,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Low in protein',
        total: 0.9,
        caloriesFrom: 3.6,
        dailyPercentage: 2,
        healthRanking: 5
      },
      carbs: {
        description: 'Moderate carbohydrates from natural sugars',
        total: 9.6,
        caloriesFrom: 38.4,
        dailyPercentage: 3,
        healthRanking: 7
      },
      fats: {
        description: 'Very low in fats',
        total: 0.2,
        caloriesFrom: 1.8,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.8,
        caloriesFrom: 0,
        dailyPercentage: 11,
        healthRanking: 8
      },
      calories: {
        description: 'Low in calories',
        total: 41,
        fromCarbs: 38.4,
        fromProtein: 3.6,
        fromFat: 1.8
      },
      vitamins: ['vitamin_a', 'vitamin_k', 'vitamin_c'],
      minerals: ['potassium'],
      saturatedFat: 0.0,
      sugar: 4.7,
      sodium: 69,
      cholesterol: 0,
      vitaminC: 5.9,
      calcium: 33,
      iron: 0.3,
      potassium: 320
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh root vegetable in its natural state, rich in beta-carotenes.',
      descriptionKey: 'carrot_processing_desc',
      indicators: ['Fresh', 'Rich in beta-carotene', 'Natural tuber'],
      indicatorsKeys: ['fresh', 'rich_beta_carotene', 'natural_tuber']
    },
    otherOptionsIds: ['sweet_potato_006', 'broccoli_001', 'apple_002'],
    description: 'Orange root vegetable rich in beta-carotene',
    descriptionKey: 'carrot_004'
  },
  {
    id: 'kale_005',
    name: 'Kale',
    nameKey: 'kale_005',
    image: '/placeholder.svg',
    rating: 9.8,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Excellent source of protein',
        total: 4.3,
        caloriesFrom: 17.2,
        dailyPercentage: 9,
        healthRanking: 9
      },
      carbs: {
        description: 'Low in carbohydrates',
        total: 8.8,
        caloriesFrom: 35.2,
        dailyPercentage: 3,
        healthRanking: 9
      },
      fats: {
        description: 'Very low in fats',
        total: 0.9,
        caloriesFrom: 8.1,
        dailyPercentage: 1,
        healthRanking: 9
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 3.6,
        caloriesFrom: 0,
        dailyPercentage: 14,
        healthRanking: 10
      },
      calories: {
        description: 'Very low in calories',
        total: 49,
        fromCarbs: 35.2,
        fromProtein: 17.2,
        fromFat: 8.1
      },
      vitamins: ['vitamin_k', 'vitamin_a', 'vitamin_c', 'folate'],
      minerals: ['calcium', 'potassium', 'iron', 'magnesium'],
      saturatedFat: 0.1,
      sugar: 2.3,
      sodium: 38,
      cholesterol: 0,
      vitaminC: 120,
      calcium: 150,
      iron: 1.5,
      potassium: 491
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Natural green superfood without industrial processing.',
      descriptionKey: 'kale_processing_desc',
      indicators: ['Superfood', 'Leafy green', 'Rich in antioxidants'],
      indicatorsKeys: ['superfood', 'leafy_green', 'rich_antioxidants']
    },
    otherOptionsIds: ['spinach_003', 'broccoli_001', 'brussels_007'],
    description: 'Superfood leafy green with exceptional nutrient density',
    descriptionKey: 'kale_005'
  },
  {
    id: 'cauliflower_006',
    name: 'Cauliflower',
    nameKey: 'cauliflower_006',
    image: '/placeholder.svg',
    rating: 8.4,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Good source of protein',
        total: 1.9,
        caloriesFrom: 7.6,
        dailyPercentage: 4,
        healthRanking: 7
      },
      carbs: {
        description: 'Very low in carbohydrates',
        total: 4.9,
        caloriesFrom: 19.6,
        dailyPercentage: 2,
        healthRanking: 10
      },
      fats: {
        description: 'Very low in fats',
        total: 0.3,
        caloriesFrom: 2.7,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.0,
        caloriesFrom: 0,
        dailyPercentage: 8,
        healthRanking: 8
      },
      calories: {
        description: 'Very low in calories',
        total: 25,
        fromCarbs: 19.6,
        fromProtein: 7.6,
        fromFat: 2.7
      },
      vitamins: ['vitamin_c', 'vitamin_k', 'folate'],
      minerals: ['potassium'],
      saturatedFat: 0.1,
      sugar: 1.9,
      sodium: 30,
      cholesterol: 0,
      vitaminC: 48.2,
      calcium: 22,
      iron: 0.4,
      potassium: 299
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh cruciferous vegetable, versatile and low in calories.',
      descriptionKey: 'cauliflower_processing_desc',
      indicators: ['Versatile', 'Low calories', 'Fresh vegetable'],
      indicatorsKeys: ['versatile', 'low_calories', 'fresh_vegetable']
    },
    otherOptionsIds: ['broccoli_001', 'brussels_007', 'kale_005'],
    description: 'Versatile cruciferous vegetable, low in calories',
    descriptionKey: 'cauliflower_006'
  },
  {
    id: 'brussels_007',
    name: 'Brussels Sprouts',
    nameKey: 'brussels_007',
    image: '/placeholder.svg',
    rating: 8.9,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Good source of protein',
        total: 3.4,
        caloriesFrom: 13.6,
        dailyPercentage: 7,
        healthRanking: 8
      },
      carbs: {
        description: 'Low in carbohydrates',
        total: 8.9,
        caloriesFrom: 35.6,
        dailyPercentage: 3,
        healthRanking: 9
      },
      fats: {
        description: 'Very low in fats',
        total: 0.3,
        caloriesFrom: 2.7,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 3.8,
        caloriesFrom: 0,
        dailyPercentage: 15,
        healthRanking: 10
      },
      calories: {
        description: 'Very low in calories',
        total: 43,
        fromCarbs: 35.6,
        fromProtein: 13.6,
        fromFat: 2.7
      },
      vitamins: ['vitamin_k', 'vitamin_c', 'folate'],
      minerals: ['potassium', 'iron'],
      saturatedFat: 0.1,
      sugar: 2.2,
      sodium: 25,
      cholesterol: 0,
      vitaminC: 85,
      calcium: 42,
      iron: 1.4,
      potassium: 389
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh mini cabbages in their natural state, rich in nutrients.',
      descriptionKey: 'brussels_processing_desc',
      indicators: ['Fresh', 'Rich vitamin C', 'High fiber'],
      indicatorsKeys: ['fresh', 'rich_vitamin_c', 'high_fiber']
    },
    otherOptionsIds: ['broccoli_001', 'cauliflower_006', 'kale_005'],
    description: 'Mini cabbage-like vegetables with a slightly bitter taste',
    descriptionKey: 'brussels_007'
  },
  {
    id: 'pear_008',
    name: 'Pear',
    nameKey: 'pear_008',
    image: '/placeholder.svg',
    rating: 8.3,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low in protein',
        total: 0.4,
        caloriesFrom: 1.6,
        dailyPercentage: 1,
        healthRanking: 4
      },
      carbs: {
        description: 'Good source of natural carbohydrates',
        total: 15.2,
        caloriesFrom: 60.8,
        dailyPercentage: 5,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.1,
        caloriesFrom: 0.9,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 3.1,
        caloriesFrom: 0,
        dailyPercentage: 12,
        healthRanking: 9
      },
      calories: {
        description: 'Low in calories',
        total: 57,
        fromCarbs: 60.8,
        fromProtein: 1.6,
        fromFat: 0.9
      },
      vitamins: ['vitamin_c', 'vitamin_k'],
      minerals: ['potassium'],
      saturatedFat: 0.0,
      sugar: 9.8,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 4.3,
      calcium: 9,
      iron: 0.2,
      potassium: 116
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Sweet and juicy fresh fruit, high in fiber.',
      descriptionKey: 'pear_processing_desc',
      indicators: ['Fresh fruit', 'High fiber', 'Natural energy'],
      indicatorsKeys: ['fresh_fruit', 'high_fiber', 'natural_energy']
    },
    otherOptionsIds: ['apple_002', 'orange_009', 'banana_010'],
    description: 'Sweet and juicy fruit with high fiber content',
    descriptionKey: 'pear_008'
  },
  {
    id: 'orange_009',
    name: 'Orange',
    nameKey: 'orange_009',
    image: '/placeholder.svg',
    rating: 8.7,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low in protein',
        total: 0.9,
        caloriesFrom: 3.6,
        dailyPercentage: 2,
        healthRanking: 5
      },
      carbs: {
        description: 'Good source of natural carbohydrates',
        total: 11.8,
        caloriesFrom: 47.2,
        dailyPercentage: 4,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.1,
        caloriesFrom: 0.9,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.4,
        caloriesFrom: 0,
        dailyPercentage: 10,
        healthRanking: 8
      },
      calories: {
        description: 'Low in calories',
        total: 47,
        fromCarbs: 47.2,
        fromProtein: 3.6,
        fromFat: 0.9
      },
      vitamins: ['vitamin_c', 'folate', 'vitamin_a'],
      minerals: ['potassium', 'calcium'],
      saturatedFat: 0.0,
      sugar: 9.4,
      sodium: 0,
      cholesterol: 0,
      vitaminC: 53.2,
      calcium: 40,
      iron: 0.1,
      potassium: 181
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh citrus fruit, excellent source of vitamin C.',
      descriptionKey: 'orange_processing_desc',
      indicators: ['Citrus natural', 'Rich in vitamin C', 'Fresh'],
      indicatorsKeys: ['citrus_natural', 'rich_vitamin_c', 'fresh']
    },
    otherOptionsIds: ['apple_002', 'pear_008', 'banana_010'],
    description: 'Citrus fruit packed with vitamin C',
    descriptionKey: 'orange_009'
  },
  {
    id: 'banana_010',
    name: 'Banana',
    nameKey: 'banana_010',
    image: '/placeholder.svg',
    rating: 8.1,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low in protein',
        total: 1.1,
        caloriesFrom: 4.4,
        dailyPercentage: 2,
        healthRanking: 5
      },
      carbs: {
        description: 'Good source of natural carbohydrates',
        total: 22.8,
        caloriesFrom: 91.2,
        dailyPercentage: 8,
        healthRanking: 7
      },
      fats: {
        description: 'Very low in fats',
        total: 0.3,
        caloriesFrom: 2.7,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.6,
        caloriesFrom: 0,
        dailyPercentage: 10,
        healthRanking: 8
      },
      calories: {
        description: 'Moderate calories from natural sugars',
        total: 89,
        fromCarbs: 91.2,
        fromProtein: 4.4,
        fromFat: 2.7
      },
      vitamins: ['vitamin_b6', 'vitamin_c', 'folate'],
      minerals: ['potassium', 'magnesium'],
      saturatedFat: 0.1,
      sugar: 12.2,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 8.7,
      calcium: 5,
      iron: 0.3,
      potassium: 358
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Tropical fruit rich in potassium and natural sugars.',
      descriptionKey: 'banana_processing_desc',
      indicators: ['Tropical fruit', 'Rich in potassium', 'Natural energy'],
      indicatorsKeys: ['tropical_fruit', 'rich_potassium', 'natural_energy']
    },
    otherOptionsIds: ['apple_002', 'pear_008', 'orange_009'],
    description: 'Tropical fruit rich in potassium and natural sugars',
    descriptionKey: 'banana_010'
  },
  {
    id: 'avocado_001',
    name: 'Avocado',
    nameKey: 'avocado_001',
    image: '/placeholder.svg',
    rating: 9.1,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Good source of protein',
        total: 2.0,
        caloriesFrom: 8.0,
        dailyPercentage: 4,
        healthRanking: 7
      },
      carbs: {
        description: 'Very low in carbohydrates',
        total: 8.5,
        caloriesFrom: 34.0,
        dailyPercentage: 3,
        healthRanking: 9
      },
      fats: {
        description: 'High in healthy monounsaturated fats',
        total: 14.7,
        caloriesFrom: 132.3,
        dailyPercentage: 23,
        healthRanking: 8
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 6.7,
        caloriesFrom: 0,
        dailyPercentage: 27,
        healthRanking: 10
      },
      calories: {
        description: 'High in calories but from healthy fats',
        total: 160,
        fromCarbs: 34.0,
        fromProtein: 8.0,
        fromFat: 132.3
      },
      vitamins: ['vitamin_k', 'folate', 'vitamin_c', 'vitamin_e'],
      minerals: ['potassium', 'magnesium'],
      saturatedFat: 2.1,
      sugar: 0.7,
      sodium: 7,
      cholesterol: 0,
      vitaminC: 10.0,
      calcium: 12,
      iron: 0.6,
      potassium: 485
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: true,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Creamy fruit rich in healthy monounsaturated fats.',
      descriptionKey: 'avocado_processing_desc',
      indicators: ['Healthy fats', 'Natural creamy', 'Rich in potassium'],
      indicatorsKeys: ['healthy_fats', 'natural_creamy', 'rich_potassium']
    },
    otherOptionsIds: ['almonds_004', 'olive_oil', 'nuts'],
    description: 'Creamy fruit high in healthy monounsaturated fats',
    descriptionKey: 'avocado_001'
  },
  {
    id: 'quinoa_002',
    name: 'Quinoa',
    nameKey: 'quinoa_002',
    image: '/placeholder.svg',
    rating: 9.0,
    category: 'grains',
    nutrition: {
      protein: {
        description: 'Excellent source of complete protein',
        total: 4.4,
        caloriesFrom: 17.6,
        dailyPercentage: 9,
        healthRanking: 9
      },
      carbs: {
        description: 'Good source of complex carbohydrates',
        total: 21.3,
        caloriesFrom: 85.2,
        dailyPercentage: 7,
        healthRanking: 8
      },
      fats: {
        description: 'Low in fats, healthy profile',
        total: 1.9,
        caloriesFrom: 17.1,
        dailyPercentage: 3,
        healthRanking: 8
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 2.8,
        caloriesFrom: 0,
        dailyPercentage: 11,
        healthRanking: 9
      },
      calories: {
        description: 'Moderate calories, nutrient dense',
        total: 120,
        fromCarbs: 85.2,
        fromProtein: 17.6,
        fromFat: 17.1
      },
      vitamins: ['folate', 'vitamin_e', 'vitamin_b6'],
      minerals: ['magnesium', 'phosphorus', 'potassium', 'iron'],
      saturatedFat: 0.2,
      sugar: 0.9,
      sodium: 7,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 17,
      iron: 1.5,
      potassium: 172
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: true,
      keto: false
    },
    processingLevel: {
      nova: 2,
      category: 'processed',
      description: 'Grain processed through cooking and cleaning, maintains its nutritional properties.',
      descriptionKey: 'quinoa_processing_desc',
      indicators: ['Cooked grain', 'Clean', 'Complete protein'],
      indicatorsKeys: ['cooked_grain', 'clean', 'complete_protein']
    },
    otherOptionsIds: ['brown_rice', 'oats', 'buckwheat'],
    description: 'Complete protein grain, gluten-free superfood',
    descriptionKey: 'quinoa_002'
  },
  {
    id: 'salmon_003',
    name: 'Salmon',
    nameKey: 'salmon_003',
    image: '/placeholder.svg',
    rating: 9.3,
    category: 'fish',
    nutrition: {
      protein: {
        description: 'Excellent source of high-quality protein',
        total: 25.4,
        caloriesFrom: 101.6,
        dailyPercentage: 51,
        healthRanking: 10
      },
      carbs: {
        description: 'No carbohydrates',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fats: {
        description: 'High in healthy omega-3 fatty acids',
        total: 12.4,
        caloriesFrom: 111.6,
        dailyPercentage: 19,
        healthRanking: 9
      },
      fiber: {
        description: 'No fiber',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 1
      },
      calories: {
        description: 'Moderate calories, high quality',
        total: 208,
        fromCarbs: 0,
        fromProtein: 101.6,
        fromFat: 111.6
      },
      vitamins: ['vitamin_d', 'vitamin_b12', 'vitamin_b6'],
      minerals: ['selenium', 'phosphorus', 'potassium'],
      saturatedFat: 3.1,
      sugar: 0,
      sodium: 48,
      cholesterol: 55,
      vitaminC: 0,
      calcium: 12,
      iron: 0.8,
      potassium: 363
    },
    allergens: {
      vegan: false,
      vegetarian: false,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: false,
      soyFree: true,
      halal: false,
      kosher: false,
      organic: false,
      lowSodium: false,
      sugarFree: true,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh or frozen fish, rich in omega-3 fatty acids.',
      descriptionKey: 'salmon_processing_desc',
      indicators: ['Fresh fish', 'Rich in omega-3', 'Natural protein'],
      indicatorsKeys: ['fresh_fish', 'rich_omega3', 'natural_protein']
    },
    otherOptionsIds: ['tuna', 'mackerel', 'sardines'],
    description: 'Fatty fish rich in omega-3 fatty acids',
    descriptionKey: 'salmon_003'
  },
  {
    id: 'almonds_004',
    name: 'Almonds',
    nameKey: 'almonds_004',
    image: '/placeholder.svg',
    rating: 8.9,
    category: 'nuts',
    nutrition: {
      protein: {
        description: 'Excellent source of protein',
        total: 21.2,
        caloriesFrom: 84.8,
        dailyPercentage: 42,
        healthRanking: 9
      },
      carbs: {
        description: 'Low in carbohydrates',
        total: 9.5,
        caloriesFrom: 38.0,
        dailyPercentage: 3,
        healthRanking: 8
      },
      fats: {
        description: 'High in healthy monounsaturated fats',
        total: 49.9,
        caloriesFrom: 449.1,
        dailyPercentage: 77,
        healthRanking: 8
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 12.5,
        caloriesFrom: 0,
        dailyPercentage: 50,
        healthRanking: 10
      },
      calories: {
        description: 'High in calories but very nutritious',
        total: 579,
        fromCarbs: 38.0,
        fromProtein: 84.8,
        fromFat: 449.1
      },
      vitamins: ['vitamin_e', 'vitamin_b2', 'niacin'],
      minerals: ['magnesium', 'phosphorus', 'calcium'],
      saturatedFat: 3.8,
      sugar: 4.4,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 269,
      iron: 3.7,
      potassium: 733
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: false,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Natural tree nuts, rich in healthy fats and vitamin E.',
      descriptionKey: 'almonds_processing_desc',
      indicators: ['Natural nut', 'Rich in vitamin E', 'Healthy fats'],
      indicatorsKeys: ['natural_nut', 'rich_vitamin_e', 'healthy_fats']
    },
    otherOptionsIds: ['walnuts', 'cashews', 'pistachios'],
    description: 'Tree nuts high in healthy fats and vitamin E',
    descriptionKey: 'almonds_004'
  },
  {
    id: 'blueberries_005',
    name: 'Blueberries',
    nameKey: 'blueberries_005',
    image: '/placeholder.svg',
    rating: 9.4,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low in protein',
        total: 0.7,
        caloriesFrom: 2.8,
        dailyPercentage: 1,
        healthRanking: 4
      },
      carbs: {
        description: 'Moderate natural carbohydrates',
        total: 14.5,
        caloriesFrom: 58.0,
        dailyPercentage: 5,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.3,
        caloriesFrom: 2.7,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.4,
        caloriesFrom: 0,
        dailyPercentage: 10,
        healthRanking: 8
      },
      calories: {
        description: 'Low in calories',
        total: 57,
        fromCarbs: 58.0,
        fromProtein: 2.8,
        fromFat: 2.7
      },
      vitamins: ['vitamin_c', 'vitamin_k', 'vitamin_e'],
      minerals: ['manganese', 'potassium'],
      saturatedFat: 0.1,
      sugar: 10.0,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 9.7,
      calcium: 6,
      iron: 0.3,
      potassium: 77
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh forest berries, rich in antioxidants and brain superfood.',
      descriptionKey: 'blueberries_processing_desc',
      indicators: ['Rich in antioxidants', 'Fresh fruit', 'Superfood'],
      indicatorsKeys: ['rich_antioxidants', 'fresh_fruit', 'superfood']
    },
    otherOptionsIds: ['strawberries', 'raspberries', 'blackberries'],
    description: 'Antioxidant-rich berries, brain superfood',
    descriptionKey: 'blueberries_005'
  },
  {
    id: 'sweet_potato_006',
    name: 'Sweet Potato',
    nameKey: 'sweet_potato_006',
    image: '/placeholder.svg',
    rating: 8.8,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Good source of protein',
        total: 2.0,
        caloriesFrom: 8.0,
        dailyPercentage: 4,
        healthRanking: 7
      },
      carbs: {
        description: 'Good source of complex carbohydrates',
        total: 20.1,
        caloriesFrom: 80.4,
        dailyPercentage: 7,
        healthRanking: 7
      },
      fats: {
        description: 'Very low in fats',
        total: 0.1,
        caloriesFrom: 0.9,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 3.0,
        caloriesFrom: 0,
        dailyPercentage: 12,
        healthRanking: 8
      },
      calories: {
        description: 'Moderate calories from complex carbs',
        total: 86,
        fromCarbs: 80.4,
        fromProtein: 8.0,
        fromFat: 0.9
      },
      vitamins: ['vitamin_a', 'vitamin_c', 'vitamin_b6'],
      minerals: ['potassium', 'manganese'],
      saturatedFat: 0.0,
      sugar: 4.2,
      sodium: 54,
      cholesterol: 0,
      vitaminC: 2.4,
      calcium: 30,
      iron: 0.6,
      potassium: 337
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh orange tuber, rich in beta-carotenes and fiber.',
      descriptionKey: 'sweet_potato_processing_desc',
      indicators: ['Natural tuber', 'Rich in beta-carotene', 'High fiber'],
      indicatorsKeys: ['natural_tuber', 'rich_beta_carotene', 'high_fiber']
    },
    otherOptionsIds: ['carrot_004', 'pumpkin', 'butternut_squash'],
    description: 'Orange tuber vegetable rich in beta-carotene',
    descriptionKey: 'sweet_potato_006'
  },
  {
    id: 'greek_yogurt_007',
    name: 'Greek Yogurt',
    nameKey: 'greek_yogurt_007',
    image: '/placeholder.svg',
    rating: 8.5,
    category: 'dairy',
    nutrition: {
      protein: {
        description: 'Excellent source of protein',
        total: 10.0,
        caloriesFrom: 40.0,
        dailyPercentage: 20,
        healthRanking: 9
      },
      carbs: {
        description: 'Low in carbohydrates',
        total: 3.6,
        caloriesFrom: 14.4,
        dailyPercentage: 1,
        healthRanking: 9
      },
      fats: {
        description: 'Low in fats',
        total: 0.4,
        caloriesFrom: 3.6,
        dailyPercentage: 1,
        healthRanking: 9
      },
      fiber: {
        description: 'No fiber',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 1
      },
      calories: {
        description: 'Low in calories, high protein',
        total: 59,
        fromCarbs: 14.4,
        fromProtein: 40.0,
        fromFat: 3.6
      },
      vitamins: ['vitamin_b12', 'riboflavin'],
      minerals: ['calcium', 'phosphorus', 'potassium'],
      saturatedFat: 0.1,
      sugar: 3.6,
      sodium: 36,
      cholesterol: 5,
      vitaminC: 0,
      calcium: 110,
      iron: 0.1,
      potassium: 141
    },
    allergens: {
      vegan: false,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: false,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 2,
      category: 'processed',
      description: 'Fermented and strained dairy with beneficial probiotic cultures.',
      descriptionKey: 'greek_yogurt_processing_desc',
      indicators: ['Fermented', 'Probiotics', 'Strained'],
      indicatorsKeys: ['fermented', 'probiotics', 'strained']
    },
    otherOptionsIds: ['cottage_cheese', 'kefir', 'plain_yogurt'],
    description: 'Natural Greek yogurt: creamy, strained, high in protein, calcium, and probiotics.',
    descriptionKey: 'greek_yogurt_007'
  },
  {
    id: 'chia_seeds_008',
    name: 'Chia Seeds',
    nameKey: 'chia_seeds_008',
    image: '/placeholder.svg',
    rating: 9.6,
    category: 'seeds',
    nutrition: {
      protein: {
        description: 'Excellent source of protein',
        total: 16.5,
        caloriesFrom: 66.0,
        dailyPercentage: 33,
        healthRanking: 9
      },
      carbs: {
        description: 'Good source of complex carbohydrates',
        total: 42.1,
        caloriesFrom: 168.4,
        dailyPercentage: 14,
        healthRanking: 8
      },
      fats: {
        description: 'High in healthy omega-3 fats',
        total: 30.7,
        caloriesFrom: 276.3,
        dailyPercentage: 47,
        healthRanking: 9
      },
      fiber: {
        description: 'Exceptional source of fiber',
        total: 34.4,
        caloriesFrom: 0,
        dailyPercentage: 138,
        healthRanking: 10
      },
      calories: {
        description: 'High in calories but very nutritious',
        total: 486,
        fromCarbs: 168.4,
        fromProtein: 66.0,
        fromFat: 276.3
      },
      vitamins: ['vitamin_e', 'niacin', 'thiamine'],
      minerals: ['calcium', 'phosphorus', 'magnesium'],
      saturatedFat: 3.3,
      sugar: 0,
      sodium: 16,
      cholesterol: 0,
      vitaminC: 1.6,
      calcium: 631,
      iron: 7.7,
      potassium: 407
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: true,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Natural tiny seeds, rich in omega-3 and fiber.',
      descriptionKey: 'chia_seeds_processing_desc',
      indicators: ['Natural seed', 'Rich in omega-3', 'High fiber'],
      indicatorsKeys: ['natural_seed', 'rich_omega3', 'high_fiber']
    },
    otherOptionsIds: ['flax_seeds', 'hemp_seeds', 'pumpkin_seeds'],
    description: 'Tiny seeds packed with omega-3s and fiber',
    descriptionKey: 'chia_seeds_008'
  },
  {
    id: 'chips_009',
    name: 'Potato Chips',
    nameKey: 'chips_009',
    image: '/placeholder.svg',
    rating: 3.2,
    category: 'snacks',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 6.6,
        caloriesFrom: 26.4,
        dailyPercentage: 13,
        healthRanking: 4
      },
      carbs: {
        description: 'High in refined carbohydrates',
        total: 49.7,
        caloriesFrom: 198.8,
        dailyPercentage: 17,
        healthRanking: 3
      },
      fats: {
        description: 'Very high in unhealthy fats',
        total: 34.6,
        caloriesFrom: 311.4,
        dailyPercentage: 53,
        healthRanking: 2
      },
      fiber: {
        description: 'Low fiber content',
        total: 4.4,
        caloriesFrom: 0,
        dailyPercentage: 18,
        healthRanking: 6
      },
      calories: {
        description: 'Very high in calories',
        total: 536,
        fromCarbs: 198.8,
        fromProtein: 26.4,
        fromFat: 311.4
      },
      vitamins: ['vitamin_c'],
      minerals: ['potassium'],
      saturatedFat: 4.6,
      sugar: 0.3,
      sodium: 525,
      cholesterol: 0,
      vitaminC: 18.8,
      calcium: 14,
      iron: 1.6,
      potassium: 1196
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: false,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: true,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Highly processed product with refined oils, added salt and industrial additives to enhance flavor and texture.',
      descriptionKey: 'chips_processing_desc',
      indicators: ['Hydrogenated oils', 'High sodium', 'Artificial flavors', 'Preservatives', 'Industrial frying'],
      indicatorsKeys: ['hydrogenated_oils', 'high_sodium', 'artificial_flavors', 'preservatives', 'industrial_frying']
    },
    otherOptionsIds: ['baked_chips', 'vegetable_chips', 'nuts'],
    description: 'Deep-fried potato chips with added salt and preservatives',
    descriptionKey: 'chips_009'
  },
  {
    id: 'soda_010',
    name: 'Cola Soda',
    nameKey: 'soda_010',
    image: '/placeholder.svg',
    rating: 2.1,
    category: 'beverages',
    nutrition: {
      protein: {
        description: 'No protein',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 1
      },
      carbs: {
        description: 'Very high in refined sugars',
        total: 10.6,
        caloriesFrom: 42.4,
        dailyPercentage: 4,
        healthRanking: 1
      },
      fats: {
        description: 'No fats',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'No fiber',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 1
      },
      calories: {
        description: 'High empty calories from sugar',
        total: 42,
        fromCarbs: 42.4,
        fromProtein: 0,
        fromFat: 0
      },
      vitamins: [],
      minerals: ['sodium'],
      saturatedFat: 0,
      sugar: 10.6,
      sodium: 2,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 2,
      iron: 0.1,
      potassium: 2
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Ultra-processed beverage with high fructose corn syrup, artificial colors, preservatives and chemical additives.',
      descriptionKey: 'soda_processing_desc',
      indicators: ['Corn syrup', 'Artificial colors', 'Phosphoric acid', 'Added caffeine', 'Synthetic flavors'],
      indicatorsKeys: ['corn_syrup', 'artificial_colors', 'phosphoric_acid', 'added_caffeine', 'synthetic_flavors']
    },
    otherOptionsIds: ['sparkling_water', 'fruit_juice', 'herbal_tea'],
    description: 'Carbonated soft drink with high sugar content and artificial additives',
    descriptionKey: 'soda_010'
  },
  {
    id: 'instant_noodles_011',
    name: 'Instant Noodles',
    nameKey: 'instant_noodles_011',
    image: '/placeholder.svg',
    rating: 2.8,
    category: 'processed_foods',
    nutrition: {
      protein: {
        description: 'Moderate protein, low quality',
        total: 10.4,
        caloriesFrom: 41.6,
        dailyPercentage: 21,
        healthRanking: 4
      },
      carbs: {
        description: 'High in refined carbohydrates',
        total: 55.7,
        caloriesFrom: 222.8,
        dailyPercentage: 19,
        healthRanking: 3
      },
      fats: {
        description: 'High in unhealthy fats',
        total: 21.1,
        caloriesFrom: 189.9,
        dailyPercentage: 32,
        healthRanking: 2
      },
      fiber: {
        description: 'Low fiber content',
        total: 4.0,
        caloriesFrom: 0,
        dailyPercentage: 16,
        healthRanking: 5
      },
      calories: {
        description: 'Very high in calories',
        total: 448,
        fromCarbs: 222.8,
        fromProtein: 41.6,
        fromFat: 189.9
      },
      vitamins: ['thiamine', 'riboflavin'],
      minerals: ['sodium', 'iron'],
      saturatedFat: 9.8,
      sugar: 2.5,
      sodium: 1820,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 54,
      iron: 4.3,
      potassium: 120
    },
    allergens: {
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      lactoseFree: true,
      nutFree: true,
      eggFree: false,
      fishFree: true,
      soyFree: false,
      halal: false,
      kosher: false,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Pre-cooked and fried noodles with seasoning packet full of monosodium glutamate, preservatives and artificial flavorings.',
      descriptionKey: 'instant_noodles_processing_desc',
      indicators: ['Palm oil', 'Monosodium glutamate', 'BHT preservatives', 'Excess sodium', 'Pre-fried noodles'],
      indicatorsKeys: ['palm_oil', 'monosodium_glutamate', 'bht_preservatives', 'excess_sodium', 'pre_fried_noodles']
    },
    otherOptionsIds: ['whole_grain_pasta', 'rice_noodles', 'quinoa'],
    description: 'Pre-cooked fried noodles with artificial seasoning packet',
    descriptionKey: 'instant_noodles_011'
  },
  {
    id: 'ice_cream_012',
    name: 'Industrial Ice Cream',
    nameKey: 'ice_cream_012',
    image: '/placeholder.svg',
    rating: 3.5,
    category: 'desserts',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 3.5,
        caloriesFrom: 14.0,
        dailyPercentage: 7,
        healthRanking: 5
      },
      carbs: {
        description: 'High in refined sugars',
        total: 23.6,
        caloriesFrom: 94.4,
        dailyPercentage: 8,
        healthRanking: 2
      },
      fats: {
        description: 'High in saturated fats',
        total: 11.0,
        caloriesFrom: 99.0,
        dailyPercentage: 17,
        healthRanking: 3
      },
      fiber: {
        description: 'Very low fiber',
        total: 0.7,
        caloriesFrom: 0,
        dailyPercentage: 3,
        healthRanking: 3
      },
      calories: {
        description: 'High in calories from sugar and fat',
        total: 207,
        fromCarbs: 94.4,
        fromProtein: 14.0,
        fromFat: 99.0
      },
      vitamins: ['vitamin_a', 'vitamin_b12'],
      minerals: ['calcium', 'phosphorus'],
      saturatedFat: 6.8,
      sugar: 21.2,
      sodium: 80,
      cholesterol: 45,
      vitaminC: 0.6,
      calcium: 128,
      iron: 0.2,
      potassium: 199
    },
    allergens: {
      vegan: false,
      vegetarian: true,
      glutenFree: false,
      lactoseFree: false,
      nutFree: false,
      eggFree: false,
      fishFree: true,
      soyFree: false,
      halal: false,
      kosher: false,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Ultra-processed frozen dessert with emulsifiers, stabilizers, artificial colors and flavorings.',
      descriptionKey: 'ice_cream_processing_desc',
      indicators: ['Emulsifiers', 'Stabilizing gums', 'Artificial colors', 'Added sugars', 'Synthetic flavors'],
      indicatorsKeys: ['emulsifiers', 'stabilizing_gums', 'artificial_colors', 'added_sugars', 'synthetic_flavors']
    },
    otherOptionsIds: ['frozen_yogurt', 'fruit_sorbet', 'homemade_ice_cream'],
    description: 'Industrial ice cream with artificial flavors and stabilizers',
    descriptionKey: 'ice_cream_012'
  },
  {
    id: 'energy_drink_013',
    name: 'Energy Drink',
    nameKey: 'energy_drink_013',
    image: '/placeholder.svg',
    rating: 2.3,
    category: 'beverages',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 0.3,
        caloriesFrom: 1.2,
        dailyPercentage: 1,
        healthRanking: 3
      },
      carbs: {
        description: 'Very high in refined sugars',
        total: 28.0,
        caloriesFrom: 112.0,
        dailyPercentage: 9,
        healthRanking: 1
      },
      fats: {
        description: 'No fats',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'No fiber',
        total: 0,
        caloriesFrom: 0,
        dailyPercentage: 0,
        healthRanking: 1
      },
      calories: {
        description: 'High empty calories from sugar',
        total: 113,
        fromCarbs: 112.0,
        fromProtein: 1.2,
        fromFat: 0
      },
      vitamins: ['niacin', 'vitamin_b6', 'vitamin_b12'],
      minerals: ['sodium'],
      saturatedFat: 0,
      sugar: 27.0,
      sodium: 200,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 5,
      iron: 0.1,
      potassium: 28
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Beverage formulated with synthetic caffeine, taurine, added sugars and stimulating additives.',
      descriptionKey: 'energy_drink_processing_desc',
      indicators: ['Synthetic caffeine', 'Artificial taurine', 'Blue dyes', 'Synthetic stimulants', 'High added sugar'],
      indicatorsKeys: ['synthetic_caffeine', 'artificial_taurine', 'blue_dyes', 'synthetic_stimulants', 'high_added_sugar']
    },
    otherOptionsIds: ['green_tea', 'coffee', 'coconut_water'],
    description: 'Caffeinated beverage with synthetic stimulants and high sugar content',
    descriptionKey: 'energy_drink_013'
  },
  {
    id: 'cereal_014',
    name: 'Sugary Cereal',
    nameKey: 'cereal_014',
    image: '/placeholder.svg',
    rating: 3.8,
    category: 'breakfast',
    nutrition: {
      protein: {
        description: 'Moderate protein, fortified',
        total: 7.5,
        caloriesFrom: 30.0,
        dailyPercentage: 15,
        healthRanking: 5
      },
      carbs: {
        description: 'Very high in refined sugars',
        total: 84.0,
        caloriesFrom: 336.0,
        dailyPercentage: 28,
        healthRanking: 2
      },
      fats: {
        description: 'Low in fats',
        total: 2.5,
        caloriesFrom: 22.5,
        dailyPercentage: 4,
        healthRanking: 7
      },
      fiber: {
        description: 'Low fiber content',
        total: 3.0,
        caloriesFrom: 0,
        dailyPercentage: 12,
        healthRanking: 5
      },
      calories: {
        description: 'High in calories from sugar',
        total: 389,
        fromCarbs: 336.0,
        fromProtein: 30.0,
        fromFat: 22.5
      },
      vitamins: ['vitamin_d', 'vitamin_b12', 'thiamine', 'riboflavin'],
      minerals: ['iron', 'zinc'],
      saturatedFat: 0.5,
      sugar: 37.0,
      sodium: 586,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 33,
      iron: 24.3,
      potassium: 130
    },
    allergens: {
      vegan: false,
      vegetarian: true,
      glutenFree: false,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: false,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Extruded cereal with added sugars, artificial colors, synthetic vitamins and preservatives.',
      descriptionKey: 'cereal_processing_desc',
      indicators: ['Industrial extrusion', 'Added sugars', 'FD&C dyes', 'Synthetic vitamins', 'BHT preservative'],
      indicatorsKeys: ['industrial_extrusion', 'added_sugars', 'fdc_dyes', 'synthetic_vitamins', 'bht_preservative']
    },
    otherOptionsIds: ['oatmeal', 'muesli', 'granola'],
    description: 'Processed breakfast cereal with added sugars and artificial colors',
    descriptionKey: 'cereal_014'
  },
  // NUEVOS PRODUCTOS CON REGIONALISMOS
  {
    id: 'popcorn_016',
    name: 'Popcorn',
    nameKey: 'popcorn_016',
    image: '/placeholder.svg',
    rating: 7.2,
    category: 'snacks',
    nutrition: {
      protein: {
        description: 'Moderate protein content',
        total: 3.3,
        caloriesFrom: 13.2,
        dailyPercentage: 7,
        healthRanking: 6
      },
      carbs: {
        description: 'High in carbohydrates',
        total: 22.0,
        caloriesFrom: 88.0,
        dailyPercentage: 7,
        healthRanking: 6
      },
      fats: {
        description: 'Low in fats',
        total: 1.2,
        caloriesFrom: 10.8,
        dailyPercentage: 2,
        healthRanking: 8
      },
      fiber: {
        description: 'Good source of fiber',
        total: 3.5,
        caloriesFrom: 0,
        dailyPercentage: 14,
        healthRanking: 8
      },
      calories: {
        description: 'Moderate calories',
        total: 106,
        fromCarbs: 88.0,
        fromProtein: 13.2,
        fromFat: 10.8
      },
      vitamins: ['vitamin_b6', 'thiamine'],
      minerals: ['magnesium', 'phosphorus'],
      saturatedFat: 0.2,
      sugar: 0.9,
      sodium: 8,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 1,
      iron: 0.9,
      potassium: 93
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Air-popped corn kernels without added oils or excessive salt.',
      descriptionKey: 'popcorn_processing_desc',
      indicators: ['Whole grain', 'Air popped', 'No additives'],
      indicatorsKeys: ['whole_grain', 'air_popped', 'no_additives']
    },
    otherOptionsIds: ['almonds_004', 'chia_seeds_008'],
    description: 'Air-popped corn kernels, whole grain snack',
    descriptionKey: 'popcorn_016'
  },
  {
    id: 'lulo_017',
    name: 'Lulo',
    nameKey: 'lulo_017',
    image: '/placeholder.svg',
    rating: 8.7,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 0.8,
        caloriesFrom: 3.2,
        dailyPercentage: 2,
        healthRanking: 4
      },
      carbs: {
        description: 'Natural fruit carbohydrates',
        total: 5.9,
        caloriesFrom: 23.6,
        dailyPercentage: 2,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.1,
        caloriesFrom: 0.9,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 3.1,
        caloriesFrom: 0,
        dailyPercentage: 12,
        healthRanking: 8
      },
      calories: {
        description: 'Very low in calories',
        total: 25,
        fromCarbs: 23.6,
        fromProtein: 3.2,
        fromFat: 0.9
      },
      vitamins: ['vitamin_c', 'vitamin_a', 'vitamin_b3'],
      minerals: ['potassium', 'phosphorus', 'calcium'],
      saturatedFat: 0.0,
      sugar: 3.2,
      sodium: 4,
      cholesterol: 0,
      vitaminC: 25.7,
      calcium: 8,
      iron: 0.4,
      potassium: 249
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh tropical fruit, rich in vitamin C and antioxidants.',
      descriptionKey: 'lulo_processing_desc',
      indicators: ['Tropical fruit', 'Rich in vitamin C', 'Natural'],
      indicatorsKeys: ['tropical_fruit', 'rich_vitamin_c', 'natural']
    },
    otherOptionsIds: ['orange_009', 'pear_008', 'apple_002'],
    description: 'Tropical fruit with citrus flavor, rich in vitamin C',
    descriptionKey: 'lulo_017'
  },
  {
    id: 'corn_018',
    name: 'Corn',
    nameKey: 'corn_018',
    image: '/placeholder.svg',
    rating: 7.8,
    category: 'grains',
    nutrition: {
      protein: {
        description: 'Good protein content',
        total: 3.4,
        caloriesFrom: 13.6,
        dailyPercentage: 7,
        healthRanking: 7
      },
      carbs: {
        description: 'High in natural carbohydrates',
        total: 25.0,
        caloriesFrom: 100.0,
        dailyPercentage: 8,
        healthRanking: 7
      },
      fats: {
        description: 'Low in fats',
        total: 1.4,
        caloriesFrom: 12.6,
        dailyPercentage: 2,
        healthRanking: 8
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.9,
        caloriesFrom: 0,
        dailyPercentage: 12,
        healthRanking: 8
      },
      calories: {
        description: 'Moderate calories',
        total: 125,
        fromCarbs: 100.0,
        fromProtein: 13.6,
        fromFat: 12.6
      },
      vitamins: ['vitamin_c', 'thiamine', 'folate'],
      minerals: ['magnesium', 'potassium', 'phosphorus'],
      saturatedFat: 0.2,
      sugar: 3.2,
      sodium: 16,
      cholesterol: 0,
      vitaminC: 7.0,
      calcium: 2,
      iron: 0.5,
      potassium: 270
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh or cooked corn kernels, natural grain source.',
      descriptionKey: 'corn_processing_desc',
      indicators: ['Whole grain', 'Natural', 'Fresh'],
      indicatorsKeys: ['whole_grain', 'natural', 'fresh']
    },
    otherOptionsIds: ['quinoa_002', 'sweet_potato_006'],
    description: 'Fresh corn kernels, natural source of energy and fiber',
    descriptionKey: 'corn_018'
  },
  {
    id: 'mango_019',
    name: 'Mango',
    nameKey: 'mango_019',
    image: '/placeholder.svg',
    rating: 8.9,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 0.8,
        caloriesFrom: 3.2,
        dailyPercentage: 2,
        healthRanking: 4
      },
      carbs: {
        description: 'Natural fruit sugars',
        total: 17.0,
        caloriesFrom: 68.0,
        dailyPercentage: 6,
        healthRanking: 7
      },
      fats: {
        description: 'Very low in fats',
        total: 0.4,
        caloriesFrom: 3.6,
        dailyPercentage: 1,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 1.6,
        caloriesFrom: 0,
        dailyPercentage: 6,
        healthRanking: 7
      },
      calories: {
        description: 'Moderate calories from natural sugars',
        total: 70,
        fromCarbs: 68.0,
        fromProtein: 3.2,
        fromFat: 3.6
      },
      vitamins: ['vitamin_c', 'vitamin_a', 'folate'],
      minerals: ['potassium', 'magnesium'],
      saturatedFat: 0.1,
      sugar: 15.0,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 36.4,
      calcium: 11,
      iron: 0.2,
      potassium: 168
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh tropical fruit, excellent source of vitamins A and C.',
      descriptionKey: 'mango_processing_desc',
      indicators: ['Tropical fruit', 'Rich in vitamin A', 'Natural sweetness'],
      indicatorsKeys: ['tropical_fruit', 'rich_vitamin_a', 'natural_sweetness']
    },
    otherOptionsIds: ['orange_009', 'banana_010', 'pear_008'],
    description: 'Sweet tropical fruit rich in vitamins A and C',
    descriptionKey: 'mango_019'
  },
  {
    id: 'beans_020',
    name: 'Black Beans',
    nameKey: 'beans_020',
    image: '/placeholder.svg',
    rating: 9.1,
    category: 'proteins',
    nutrition: {
      protein: {
        description: 'Excellent source of plant protein',
        total: 8.9,
        caloriesFrom: 35.6,
        dailyPercentage: 18,
        healthRanking: 9
      },
      carbs: {
        description: 'Complex carbohydrates',
        total: 23.0,
        caloriesFrom: 92.0,
        dailyPercentage: 8,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.9,
        caloriesFrom: 8.1,
        dailyPercentage: 1,
        healthRanking: 9
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 8.7,
        caloriesFrom: 0,
        dailyPercentage: 35,
        healthRanking: 10
      },
      calories: {
        description: 'Moderate calories with high nutrition',
        total: 132,
        fromCarbs: 92.0,
        fromProtein: 35.6,
        fromFat: 8.1
      },
      vitamins: ['folate', 'thiamine', 'vitamin_b6'],
      minerals: ['iron', 'magnesium', 'potassium'],
      saturatedFat: 0.2,
      sugar: 0.3,
      sodium: 2,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 27,
      iron: 2.9,
      potassium: 355
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: true,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Cooked legumes, excellent source of plant protein and fiber.',
      descriptionKey: 'beans_processing_desc',
      indicators: ['Plant protein', 'High fiber', 'Complex carbs'],
      indicatorsKeys: ['plant_protein', 'high_fiber', 'complex_carbs']
    },
    otherOptionsIds: ['quinoa_002', 'salmon_003', 'almonds_004'],
    description: 'Legume rich in plant protein and fiber',
    descriptionKey: 'beans_020'
  },
  {
    id: 'tomato_021',
    name: 'Tomato',
    nameKey: 'tomato_021',
    image: '/placeholder.svg',
    rating: 8.5,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 0.9,
        caloriesFrom: 3.6,
        dailyPercentage: 2,
        healthRanking: 5
      },
      carbs: {
        description: 'Low in carbohydrates',
        total: 3.9,
        caloriesFrom: 15.6,
        dailyPercentage: 1,
        healthRanking: 9
      },
      fats: {
        description: 'Very low in fats',
        total: 0.2,
        caloriesFrom: 1.8,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 1.2,
        caloriesFrom: 0,
        dailyPercentage: 5,
        healthRanking: 7
      },
      calories: {
        description: 'Very low in calories',
        total: 18,
        fromCarbs: 15.6,
        fromProtein: 3.6,
        fromFat: 1.8
      },
      vitamins: ['vitamin_c', 'vitamin_k', 'folate'],
      minerals: ['potassium', 'manganese'],
      saturatedFat: 0.0,
      sugar: 2.6,
      sodium: 5,
      cholesterol: 0,
      vitaminC: 13.7,
      calcium: 10,
      iron: 0.3,
      potassium: 237
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh vegetable fruit, rich in lycopene and vitamin C.',
      descriptionKey: 'tomato_processing_desc',
      indicators: ['Rich in lycopene', 'Fresh', 'Antioxidants'],
      indicatorsKeys: ['rich_lycopene', 'fresh', 'antioxidants']
    },
    otherOptionsIds: ['carrot_004', 'spinach_003', 'broccoli_001'],
    description: 'Fresh vegetable fruit rich in lycopene and vitamin C',
    descriptionKey: 'tomato_021'
  },
  {
    id: 'papaya_022',
    name: 'Papaya',
    nameKey: 'papaya_022',
    image: '/placeholder.svg',
    rating: 8.6,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 0.5,
        caloriesFrom: 2.0,
        dailyPercentage: 1,
        healthRanking: 4
      },
      carbs: {
        description: 'Natural fruit carbohydrates',
        total: 11.0,
        caloriesFrom: 44.0,
        dailyPercentage: 4,
        healthRanking: 8
      },
      fats: {
        description: 'Very low in fats',
        total: 0.3,
        caloriesFrom: 2.7,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 1.7,
        caloriesFrom: 0,
        dailyPercentage: 7,
        healthRanking: 7
      },
      calories: {
        description: 'Low in calories',
        total: 43,
        fromCarbs: 44.0,
        fromProtein: 2.0,
        fromFat: 2.7
      },
      vitamins: ['vitamin_c', 'vitamin_a', 'folate'],
      minerals: ['potassium', 'magnesium'],
      saturatedFat: 0.1,
      sugar: 7.8,
      sodium: 8,
      cholesterol: 0,
      vitaminC: 60.9,
      calcium: 20,
      iron: 0.2,
      potassium: 182
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh tropical fruit, excellent source of vitamin C and digestive enzymes.',
      descriptionKey: 'papaya_processing_desc',
      indicators: ['Digestive enzymes', 'Tropical fruit', 'Rich in vitamin C'],
      indicatorsKeys: ['digestive_enzymes', 'tropical_fruit', 'rich_vitamin_c']
    },
    otherOptionsIds: ['mango_019', 'orange_009', 'pear_008'],
    description: 'Tropical fruit with digestive enzymes and high vitamin C',
    descriptionKey: 'papaya_022'
  },
  {
    id: 'plantain_023',
    name: 'Plantain',
    nameKey: 'plantain_023',
    image: '/placeholder.svg',
    rating: 7.9,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 1.3,
        caloriesFrom: 5.2,
        dailyPercentage: 3,
        healthRanking: 5
      },
      carbs: {
        description: 'High in complex carbohydrates',
        total: 31.9,
        caloriesFrom: 127.6,
        dailyPercentage: 11,
        healthRanking: 7
      },
      fats: {
        description: 'Very low in fats',
        total: 0.4,
        caloriesFrom: 3.6,
        dailyPercentage: 1,
        healthRanking: 9
      },
      fiber: {
        description: 'Good source of fiber',
        total: 2.3,
        caloriesFrom: 0,
        dailyPercentage: 9,
        healthRanking: 8
      },
      calories: {
        description: 'Moderate calories from complex carbs',
        total: 122,
        fromCarbs: 127.6,
        fromProtein: 5.2,
        fromFat: 3.6
      },
      vitamins: ['vitamin_c', 'vitamin_a', 'vitamin_b6'],
      minerals: ['potassium', 'magnesium'],
      saturatedFat: 0.1,
      sugar: 15.0,
      sodium: 4,
      cholesterol: 0,
      vitaminC: 18.4,
      calcium: 3,
      iron: 0.6,
      potassium: 499
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Cooked or raw plantain, rich in potassium and complex carbohydrates.',
      descriptionKey: 'plantain_processing_desc',
      indicators: ['Rich in potassium', 'Complex carbs', 'Natural'],
      indicatorsKeys: ['rich_potassium', 'complex_carbs', 'natural']
    },
    otherOptionsIds: ['banana_010', 'sweet_potato_006', 'corn_018'],
    description: 'Starchy fruit rich in potassium and complex carbohydrates',
    descriptionKey: 'plantain_023'
  },
  {
    id: 'cacao_024',
    name: 'Raw Cacao',
    nameKey: 'cacao_024',
    image: '/placeholder.svg',
    rating: 8.8,
    category: 'snacks',
    nutrition: {
      protein: {
        description: 'Good source of protein',
        total: 4.0,
        caloriesFrom: 16.0,
        dailyPercentage: 8,
        healthRanking: 7
      },
      carbs: {
        description: 'Moderate carbohydrates',
        total: 16.0,
        caloriesFrom: 64.0,
        dailyPercentage: 5,
        healthRanking: 7
      },
      fats: {
        description: 'High in healthy fats',
        total: 12.0,
        caloriesFrom: 108.0,
        dailyPercentage: 18,
        healthRanking: 7
      },
      fiber: {
        description: 'Excellent source of fiber',
        total: 9.0,
        caloriesFrom: 0,
        dailyPercentage: 36,
        healthRanking: 10
      },
      calories: {
        description: 'High in calories but nutrient dense',
        total: 228,
        fromCarbs: 64.0,
        fromProtein: 16.0,
        fromFat: 108.0
      },
      vitamins: ['vitamin_e', 'vitamin_k'],
      minerals: ['magnesium', 'iron', 'zinc'],
      saturatedFat: 7.3,
      sugar: 1.8,
      sodium: 21,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 128,
      iron: 3.9,
      potassium: 1524
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: false,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: true,
      keto: true
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Raw cacao beans, superfood rich in antioxidants and magnesium.',
      descriptionKey: 'cacao_processing_desc',
      indicators: ['Superfood', 'Rich in antioxidants', 'Raw'],
      indicatorsKeys: ['superfood', 'rich_antioxidants', 'raw']
    },
    otherOptionsIds: ['almonds_004', 'chia_seeds_008', 'blueberries_005'],
    description: 'Raw cacao beans, superfood rich in antioxidants and minerals',
    descriptionKey: 'cacao_024'
  },
  {
    id: 'pineapple_025',
    name: 'Pineapple',
    nameKey: 'pineapple_025',
    image: '/placeholder.svg',
    rating: 8.4,
    category: 'fruits',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 0.5,
        caloriesFrom: 2.0,
        dailyPercentage: 1,
        healthRanking: 4
      },
      carbs: {
        description: 'Natural fruit sugars',
        total: 13.1,
        caloriesFrom: 52.4,
        dailyPercentage: 4,
        healthRanking: 7
      },
      fats: {
        description: 'Very low in fats',
        total: 0.1,
        caloriesFrom: 0.9,
        dailyPercentage: 0,
        healthRanking: 10
      },
      fiber: {
        description: 'Good source of fiber',
        total: 1.4,
        caloriesFrom: 0,
        dailyPercentage: 6,
        healthRanking: 7
      },
      calories: {
        description: 'Low in calories',
        total: 50,
        fromCarbs: 52.4,
        fromProtein: 2.0,
        fromFat: 0.9
      },
      vitamins: ['vitamin_c', 'vitamin_b6', 'thiamine'],
      minerals: ['manganese', 'potassium'],
      saturatedFat: 0.0,
      sugar: 9.9,
      sodium: 1,
      cholesterol: 0,
      vitaminC: 47.8,
      calcium: 13,
      iron: 0.3,
      potassium: 109
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh tropical fruit, rich in bromelain enzyme and vitamin C.',
      descriptionKey: 'pineapple_processing_desc',
      indicators: ['Bromelain enzyme', 'Tropical fruit', 'Rich in vitamin C'],
      indicatorsKeys: ['bromelain_enzyme', 'tropical_fruit', 'rich_vitamin_c']
    },
    otherOptionsIds: ['mango_019', 'papaya_022', 'orange_009'],
    description: 'Tropical fruit with bromelain enzyme and vitamin C',
    descriptionKey: 'pineapple_025'
  },
  {
    id: 'yuca_026',
    name: 'Cassava',
    nameKey: 'yuca_026',
    image: '/placeholder.svg',
    rating: 7.1,
    category: 'vegetables',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 1.4,
        caloriesFrom: 5.6,
        dailyPercentage: 3,
        healthRanking: 5
      },
      carbs: {
        description: 'High in starchy carbohydrates',
        total: 38.1,
        caloriesFrom: 152.4,
        dailyPercentage: 13,
        healthRanking: 6
      },
      fats: {
        description: 'Very low in fats',
        total: 0.3,
        caloriesFrom: 2.7,
        dailyPercentage: 0,
        healthRanking: 9
      },
      fiber: {
        description: 'Good source of fiber',
        total: 1.8,
        caloriesFrom: 0,
        dailyPercentage: 7,
        healthRanking: 7
      },
      calories: {
        description: 'High in calories from starch',
        total: 160,
        fromCarbs: 152.4,
        fromProtein: 5.6,
        fromFat: 2.7
      },
      vitamins: ['vitamin_c', 'folate'],
      minerals: ['potassium', 'magnesium'],
      saturatedFat: 0.1,
      sugar: 1.7,
      sodium: 14,
      cholesterol: 0,
      vitaminC: 20.6,
      calcium: 16,
      iron: 0.3,
      potassium: 271
    },
    allergens: {
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      lactoseFree: true,
      nutFree: true,
      eggFree: true,
      fishFree: true,
      soyFree: true,
      halal: true,
      kosher: true,
      organic: false,
      lowSodium: true,
      sugarFree: true,
      keto: false
    },
    processingLevel: {
      nova: 1,
      category: 'minimal',
      description: 'Fresh root vegetable, cooked cassava rich in starch and energy.',
      descriptionKey: 'yuca_processing_desc',
      indicators: ['Starchy root', 'Energy source', 'Gluten free'],
      indicatorsKeys: ['starchy_root', 'energy_source', 'gluten_free']
    },
    otherOptionsIds: ['sweet_potato_006', 'plantain_023', 'corn_018'],
    description: 'Starchy root vegetable, important source of carbohydrates',
    descriptionKey: 'yuca_026'
  },
  {
    id: 'cookies_015',
    name: 'Sandwich Cookies',
    nameKey: 'cookies_015',
    image: '/placeholder.svg',
    rating: 2.9,
    category: 'snacks',
    nutrition: {
      protein: {
        description: 'Low protein content',
        total: 4.7,
        caloriesFrom: 18.8,
        dailyPercentage: 9,
        healthRanking: 4
      },
      carbs: {
        description: 'Very high in refined sugars',
        total: 71.0,
        caloriesFrom: 284.0,
        dailyPercentage: 24,
        healthRanking: 1
      },
      fats: {
        description: 'High in unhealthy trans fats',
        total: 18.0,
        caloriesFrom: 162.0,
        dailyPercentage: 28,
        healthRanking: 2
      },
      fiber: {
        description: 'Low fiber content',
        total: 2.5,
        caloriesFrom: 0,
        dailyPercentage: 10,
        healthRanking: 4
      },
      calories: {
        description: 'Very high in calories',
        total: 465,
        fromCarbs: 284.0,
        fromProtein: 18.8,
        fromFat: 162.0
      },
      vitamins: ['thiamine', 'riboflavin'],
      minerals: ['iron'],
      saturatedFat: 7.0,
      sugar: 36.0,
      sodium: 375,
      cholesterol: 0,
      vitaminC: 0,
      calcium: 25,
      iron: 2.1,
      potassium: 90
    },
    allergens: {
      vegan: false,
      vegetarian: true,
      glutenFree: false,
      lactoseFree: false,
      nutFree: true,
      eggFree: false,
      fishFree: true,
      soyFree: false,
      halal: false,
      kosher: false,
      organic: false,
      lowSodium: false,
      sugarFree: false,
      keto: false
    },
    processingLevel: {
      nova: 4,
      category: 'ultra-processed',
      description: 'Industrial cookies with artificial filling, hydrogenated oils, refined sugars and multiple additives.',
      descriptionKey: 'cookies_processing_desc',
      indicators: ['Trans oils', 'Artificial filling', 'Soy lecithin', 'Artificial aromas', 'High added sugar'],
      indicatorsKeys: ['trans_oils', 'artificial_filling', 'soy_lecithin', 'artificial_aromas', 'high_added_sugar']
    },
    otherOptionsIds: ['oatmeal_cookies', 'nuts', 'fruit'],
    description: 'Sandwich cookies with artificial cream filling and hydrogenated oils',
    descriptionKey: 'cookies_015'
  }
];
