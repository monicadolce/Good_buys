// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category.id',
});
// Categories have many Products
Category.hasMany(Product), {
  foreignKey: 'category.id',
  onDelete: 'CASCADE',
};

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: 'tag_id',
});

// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   foreignKey: 'product_tag',
// });
// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   foreignKey: 'product_tag',
// }),

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
