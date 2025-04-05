import {Router} from 'express'
import { forgotPasswordController, loginController, logoutController, refreshToken, registerUserController, resetPassword, updateUserDetails, uploadImageController, userDetails, verifyEmailController, verifyForgotPasswordOtp } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/verify-email', verifyEmailController)
userRouter.post('/login', loginController )
userRouter.get('/logout', auth, logoutController)
userRouter.put('/upload-image', auth, upload.single('avatar'), uploadImageController)
userRouter.put('/update-user', auth, updateUserDetails)
userRouter.put('/forgot-password', forgotPasswordController)
userRouter.put('/verify-forgot-password', verifyForgotPasswordOtp)
userRouter.put('/reset-password', resetPassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details', auth, userDetails)

export default userRouter