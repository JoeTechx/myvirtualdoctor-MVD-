import * as z from "zod";

export const LoginSchema = z.object({
  licensenumber: z
    .string()
    .min(1, {
      message: "License Number is required",
    })
    .max(10),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

const RegisterSchema = z.object({
  fullname: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  university: z.string().min(1, {
    message: "University is required",
  }),
  gender: z.enum(["male", "female"]).optional(),
  phone: z.string().min(10, {
    message: "Phone number is required",
  }),
  hostaladdress: z.string().min(1, {
    message: "Address is required",
  }),
});

export { RegisterSchema };

const DocRegisterSchema = z.object({
  fullname: z.string().min(1, {
    message: " Full Name is required",
  }),
  state: z.string().min(1, {
    message: "state is required",
  }),
  country: z.string().min(1, {
    message: "country is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  gender: z.enum(["male", "female"]).optional(),
  phone: z.string().min(10, {
    message: "Phone number is required",
  }),
  officialaddress: z.string().min(1, {
    message: "Official Address is required",
  }),
  licensenumber: z
    .string()
    .min(1, {
      message: "License Number is required",
    })
    .max(10),
});

export { DocRegisterSchema };
