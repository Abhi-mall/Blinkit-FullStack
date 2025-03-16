const verifyEmailTemplate = ({name, url})=> {
  return `
  <p>Dear ${name}</p>
  <p>Thank you for registering Blinkeyit</p>
  <a href=${url} style = "color: green; background-color : brown; margin-top : 5px; padding : 20px">
   Verify Email
  </a> 
  `
}

export default verifyEmailTemplate