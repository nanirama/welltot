import React from 'react'
import { Button, Form, Input, TextArea, Message } from '@material-ui/core'
import isEmail from 'validator/lib/isEmail'
import Recaptcha from 'react-recaptcha'
import "../../styles/formContact.scss"
class formContact extends React.Component {
constructor(props) {
super(props);
this.state = {
name: '',
email: '',
message: '',
formProcessing: false,
MessageSuccessfullySent: false,
recaptchaIsValid: false,
errors: []
}
this.formSubmit = this.formSubmit.bind(this)
this.onChange = this.onChange.bind(this)
this.recaptchaVerify = this.recaptchaVerify.bind(this)
}
onChange(event) {
this.setState({[event.target.name]: event.target.value});
}
formSubmit(event) {
event.preventDefault()
var errors = this.FormValidation()
this.setState({errors})
if(errors.length === 0){
// Form is valid
this.setState({formProcessing: true});
const url = "https://1jo2qz82g8.execute-api.us-east-1.amazonaws.com/default/website-contact-form"
var data = {
data: {
Name: this.state.name,
Email: this.state.email,
Message: this.state.message,
}
}
console.log(JSON.stringify(data))
fetch(url, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(data), // body data type must match "Content-Type" header
})
.then(function(response) {
console.log('successful!!!')
console.log(response)
// Clear Form Values
this.setState({
name: '',
email: '',
message: '',
formProcessing: false,
MessageSuccessfullySent: true,
})
}.bind(this))
.catch(function(err) {
this.setState({formProcessing: false})
console.log('error')
console.log(err)
}.bind(this))
}
}
recaptchaVerify() {
this.setState({recaptchaIsValid: true});
}
FormValidation() {
let errors = []
if (this.state.recaptchaIsValid != true){
errors.push({ key: 'recaptcha', message: 'Recaptcha is not valid.' });
}
if (this.state.name === ''){
errors.push({ key: 'name', message: 'Please provide your name.' });
}
if (this.state.email === ''){
errors.push({ key: 'email', message: 'You need to include an email.' });
}
if (!isEmail(this.state.email)){
errors.push({ key: 'email', message: 'Please provide a valid email address.' });
}
if (this.state.message === ''){
errors.push({ key: 'message', message: 'Please provide a message.' });
}
return errors
}
isFieldError(key, errorArray){
var result = false
for (var i = 0; i < errorArray.length; i++) {
if (errorArray[i].key === key) {
result = true
break
}
}
return result
}
render() { 
return (
<Form
   error={this.state.errors.length >
   0}
   success={this.state.MessageSuccessfullySent}
   loading={this.state.formProcessing}
   >
   <Form.Field
      error={this.isFieldError('name', this.state.errors)}
      >
      <label>Name</label>
      <Input
         name='name'
         placeholder='First and last name'
         value={this.state.name}
         onChange={this.onChange}
         />
   </Form.Field>
   <Form.Field
      error={this.isFieldError('email', this.state.errors)}
      >
      <label>Email</label>
      <Input
         name='email'
         placeholder='email@example.com'
         value={this.state.email}
         onChange={this.onChange}
         />
   </Form.Field>
   <Form.Field
      error={this.isFieldError('message', this.state.errors)}
      >
      <label>Message</label>
      <TextArea
         name='message'
         placeholder='Message'
         value={this.state.message}
         onChange={this.onChange}
         />
   </Form.Field>
   <Form.Field
      error={this.isFieldError('recaptcha', this.state.errors)}
      >
      <Recaptcha
         sitekey="6Ld8Ci4aAAAAADlVHLV1bgR4jCmX0n5P_ldb0Hq3"
         verifyCallback={this.recaptchaVerify}
         />
   </Form.Field>
   <Message
      success={true}
      positive={true}
      header='Successfully Sent.'
      content='You have successfully sent your message.  We will get back to you as soon as possible.'
      />
   <Message
      error={true}
      header='Something is wrong.'
      list={this.state.errors.map(x =>
   x.message)}
   />
   <Button
   primary
   type='submit'
   content='Send'
   onClick={this.formSubmit}
   disabled={(!(this.state.name && this.state.email && this.state.message))  || this.state.formProcessing}
   />
</Form>
)
}
}
export default formContact