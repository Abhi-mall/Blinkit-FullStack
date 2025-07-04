
export const baseURL = "https://blinkit-full-stack-lac.vercel.app"

const SummaryApi = {
  register : {
    url : "/api/user/register",
    method : "post"
  },
  login : {
    url : "/api/user/login",
    method : "post"
  },
  forgot_password : {
    url : "/api/user/forgot-password",
    method : "put"
  },
  verify_forgot_password: {
    url : "/api/user/verify-forgot-password",
    method : "put"
  },
  resetPassword :{
    url: "/api/user/reset-password",
    method : "put"
  },
  refreshToken : {
    url : 'api/user/refresh-token',
    method : 'post'
  },
  userDetails : {
    url : '/api/user/user-details',
    method : "get"
  }, 
  logout : {
    url : '/api/user/logout',
    method : 'get'
  },
  uplaodAvatar : {
    url : '/api/user/upload-image',
    method : 'put'
  },
  updateUser : {
    url : '/api/user/update-user',
    method : 'put'
  },
  addCategory : {
    url : '/api/category/add-category',
    method : "post"
  },
  uploadImage : {
    url : '/api/file/upload',
    method: 'post'
  },
  getCategory : {
    url : '/api/category/get',
    method : 'get'
  },
  updateCategory: {
    url : '/api/category/update',
    method : 'put'
  },
  deleteCategory : {
    url : '/api/category/delete',
    method : 'delete'
  },
  createSubCategory : {
    url : '/api/subcategory/create',
    method : 'post'
  },
  getSubCategory : {
    url : '/api/subcategory/get',
    method : 'post'
  },
  updateSubCategory : {
    url : '/api/subcategory/update',
    method : "put"
  },
  deleteSubCategory : {
    url : '/api/subcategory/delete',
    method : "delete"
  },
  createProduct : {
    url : '/api/product/create',
    method : 'post'
  },
  getProduct : {
    url : '/api/product/get',
    method : "post"
  },
  getProductByCategory : {
    url : '/api/product/get-product-by-category',
    method : "post"
  },
  getProductByCategoryAndSubCategory : {
    url : '/api/product/get-pruduct-by-category-and-subcategory',
    method : 'post'
  },
  getProductDetails : {
    url : "/api/product/get-product-details",
    method : 'post'
  },
  searchProduct : {
    url : '/api/product/search-product',
    method : 'post'
  },
  deleteProduct : {
    url : "/api/product/delete-product",
    method: 'delete'
  },
  addToCart : {
    url : '/api/cart/create',
    method : 'post'
  },
   getCartItem : {
    url : '/api/cart/get',
    method : 'get'
  },
  updateCartItemQty : {
    url : '/api/cart/update-qty',
    method : 'put'
  },
  deleteCartItem : {
    url : '/api/cart/delete-cart-item',
    method : 'delete'
  },
  createAddress : {
        url : '/api/address/create',
        method : 'post'
    },
    getAddress : {
        url : '/api/address/get',
        method : 'get'
    },
    updateAddress : {
        url : '/api/address/update',
        method : 'put'
    },
    disableAddress : {
        url : '/api/address/disable',
        method : 'delete'
    },
    CashOnDeliveryOrder : {
        url : "/api/order/cash-on-delivery",
        method : 'post'
    },
     payment_url : {
        url : "/api/order/checkout",
        method : 'post'
    },

}

export default SummaryApi