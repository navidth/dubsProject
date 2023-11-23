import * as yup from 'yup'
export let userSchemaSign = yup.object().shape({
  Name: yup.string().required('داشتن نام کاربری الزامیست'),
  PhoneNumber:yup.string()
  .required('شماره تلفن اجباری است')
  .min(11,'شماره تلفن صحیح نیست')
  .max(11,'شماره تلفن صحیح نیست')
  .matches(/^09[0-9]d{9}$/,"شماره تلفن صحیحjk نیست "),
  Password:yup.string().required('داشتن پسورد الزامی است').min(8,'رمز عبور باید شامل هشت کاراکتر باشد'),
})
export let userSchemaLogin = yup.object().shape({
  PhoneNumber: yup.string()
  .required('شماره تلفن اجباری است')
  .min(11,'شماره تلفن صحیح نیست')
  .max(11,'شماره تلفن صحیح نیست')
  .matches(/^09[0-9]{9}$/,"شماره تلفن صحیح نیست "),
  Password:yup.string().required('داشتن پسورد الزامی است').min(8,'رمز عبور باید شامل هشت کاراکتر باشد'),
})