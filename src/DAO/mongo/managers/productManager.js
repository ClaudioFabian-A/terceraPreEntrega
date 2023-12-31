import productModel from "../models/productsModel.js";

export default class ProductManager {
  getProducts = (params) => {
    return productModel.find(params).lean();
  };
  paginateProducts = (params, paginateOptions) => {
    return productModel.paginate(params, paginateOptions);
  };
  getProductById = (params) => {
    return productModel.findOne(params).lean();
  };
  createProduct = (product) => {
    return productModel.create(product);
  };
  addProduct = (id, product) => {
    return productModel.updateOne({ _id: id }, { $set: product });
  };
  deleteProduct = (id) => {
    return productModel.deleteOne({ _id: id });
  };
}
