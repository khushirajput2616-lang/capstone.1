const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Food name is required"] 
  },
  description: { 
    type: String 
  },
  price: { 
    type: Number, 
    required: [true, "Price is required"] 
  },
  category: { 
    type: String, 
    required: [true, "Category is required"] // e.g., Burgers, Pizza, Drinks
  },
  imageUrl: { 
    type: String // Food item ki photo ka link
  },
  inStock: { 
    type: Boolean, 
    default: true 
  }
}, { timestamps: true }); // Isse createdAt aur updatedAt automatically add ho jayega

module.exports = mongoose.model('Food', foodSchema);