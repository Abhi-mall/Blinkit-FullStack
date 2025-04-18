import categoryModel from "../models/category.model.js";
import SubCategoryModel from "../models/subCategory.model.js";
import ProductModel from "../models/product.model.js";

export const AddCategoryController = async(request, response)=> {
  try {
    const {name, image} = request.body;

    if(!name || !image){
      return response.status(400).json({
        message : "All fields are required",
        success : false,
        error: true
      })}

      const addCategory = new categoryModel({
        name, image
      })
    
    

    const saveCategory = await addCategory.save()
  
    if(!saveCategory){
      return response.status(500).json({
        message : "Not created",
        success : false,
        error: true
      })
    }

    return response.status(200).json({
      message : "Category added successfully",
      success : true,
      error: false,
      data : saveCategory
    })

  } catch (error) {
    response.status(500).json({
      message : error.message || error,
      success : false,
      error : true
    })
  }
}

export const getCategoryController = async(request, response)=> {
  try {

    const data = await categoryModel.find().sort({createdAt : -1})

    return response.json({
      data : data,
      error : false,
      success : true
    })
    
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error : true,
      success : false
    })
  }
}

export const updateCategoryController = async(request, response)=> {
  try {
    
    const {_id, name, image} = request.body

    const update = await categoryModel.updateOne({
      _id : _id
    },
    {
      name,
      image
    }
  )

  return response.json({
    message : "Updated successfully",
    success : true,
    error: false,
    data : update
  })

  } catch (error) {
    return response.status(500).json({
      message : error.message || error,
      error : true,
      success : false
    })
  }
}

export const deleteCategoryController = async(request, response)=> {
  try {
    
    const  { _id } = request.body

    const checkSubcategory  = await SubCategoryModel.find({
      category : {
        $in : [_id]
      }
    }).countDocuments()

    const checkProduct  = await  ProductModel.find({
      category : {
        $in : [_id]
      }
    }).countDocuments()

    if(checkSubcategory > 0 || checkProduct > 0){
      return response.json({
        message : "Category is already used can't delete",
        error: true,
        success : false
      })
    }

    const deleteCategory  = await categoryModel.deleteOne({
      _id : _id
    }) 

    return response.json({
      message : "Category deleted successfully",
      data : deleteCategory,
      success : true,
      error : false
    })

  } catch (error) {
    return response.status(500).json({
      message : error.message || error,
      error : true,
      success : false

    })
  }
}