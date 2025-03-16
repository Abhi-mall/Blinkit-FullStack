import {Router} from 'express'
import { forgetPasswordController, loginController, logoutController, refreshToken, registerUserController, resetPassword, updateUserDetails, uploadImageController, verifyEmailController, verifyForgetPasswordOtp } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/verify-email', verifyEmailController)
userRouter.post('/login', loginController )
userRouter.get('/logout', auth, logoutController)
userRouter.put('/upload-image', auth, upload.single('avatar'), uploadImageController)
userRouter.put('/update-user', auth, updateUserDetails)
userRouter.put('/forget-password', forgetPasswordController)
userRouter.put('/verify-forget-password', verifyForgetPasswordOtp)
userRouter.put('/reset-password', resetPassword)
userRouter.post('/refresh-token',refreshToken)

export default userRouter