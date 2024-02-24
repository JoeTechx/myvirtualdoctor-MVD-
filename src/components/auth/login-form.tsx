"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string>("");
  const [loginSuccess, setLoginSuccess] = useState<string>("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    // Check user type from local storage
    const storedUserType = localStorage.getItem("userType");
    setUserType(storedUserType);
  }, []);

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsPending(true);
    const email = values.email;
    const password = values.password;
    const licenseNumber = values.licensenumber;

    try {
      // Check if email, password, and license number are valid
      if (userType === "doctor") {
        const storedDoctorData = localStorage.getItem("doctorData");
        if (storedDoctorData) {
          const doctorData = JSON.parse(storedDoctorData);
          if (
            doctorData.email === email &&
            doctorData.password === password &&
            doctorData.licensenumber === licenseNumber
          ) {
            // Doctor login successful, redirect to dashboard
            setIsPending(false);
            router.push("/mvd-chatbox");
          }
        }
      } else if (userType === "patient") {
        const storedPatientData = localStorage.getItem("patientData");
        if (storedPatientData) {
          const patientData = JSON.parse(storedPatientData);
          if (
            patientData.email === email &&
            patientData.password === password
          ) {
            // Patient login successful, redirect to dashboard
            setIsPending(false);
            router.push("/mvd-chatbox");
          }
        }
      }

      // Invalid credentials or user type, set login error
      setLoginError("Invalid credentials or user type");
      setIsPending(false);
    } catch (error) {
      // Handle any errors
      console.error("Error during login:", error);
    } 
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      licensenumber: "",
      email: "",
      password: "",
    },
  });

  return (
    <section className="w-full h-full flex flex-col m-auto items-center justify-center desk_section">
      <div className="flex justify-center items-center absolute img_desk-div">
        <Image
          src={
            userType === "doctor"
              ? "/images/doc mvd.png"
              : "/images/scope mvd.png"
          }
          width={500}
          height={500}
          alt=""
          className="object-contain w-full sm:w-3/4 md:w-[100%] lg:w-[100%]"
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 relative sign_in-form"
        >
          <div className="flex justify-between items-center">
            <Link
              href="/auth/patient-register"
              className="text-[1.2rem] font-semibold"
            >
              Sign up
            </Link>
            <Link
              href="/auth/login"
              className="text-[1.2rem] font-semibold sign_border"
            >
              Sign in
            </Link>
          </div>
          <div className="space-y-4">
            {userType === "doctor" && (
              <FormField
                name="licensenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[0.78rem]">
                      License number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="XX-000000-XX"
                        type="text"
                        className="Input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[0.78rem]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                      className="Input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-[0.78rem] font-medium">
                      Password
                    </FormLabel>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset" className="text-[0.78rem]">
                        Forgot password?
                      </Link>
                    </Button>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                      className="Input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isPending}
            variant="signin"
            type="submit"
            className="w-full"
          >
            {isPending ? "Loading..." : "Sign in"}
          </Button>
          <div className="bordered-paragraph">
            <p>or</p>
          </div>
          <div className="socail_btn">
            <Button variant="signinOutline" size="lg" className="btn">
              <FaFacebook />
            </Button>
            <Button variant="signin" size="lg" className="btn">
              <FaGoogle />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
