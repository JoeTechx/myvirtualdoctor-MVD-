"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const PatientRegisterForm = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      university: "",
      gender: "male",
      phone: "",
      hostaladdress: "",
    },
  });

  const onSubmitPatient = async (values: z.infer<typeof RegisterSchema>) => {
    setIsPending(true);
    // Simulate an API call or any asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store patient data in local storage
    localStorage.setItem("userType", "patient");
    localStorage.setItem("patientData", JSON.stringify(values));
    setIsPending(false);
    router.push("/auth/login");
  };
  return (
    <section className="w-full flex flex-col m-auto items-center justify-center desk_section">
      <div className="flex justify-center items-center absolute img_desk-div">
        <Image
          src="/images/mvdscope.png"
          width={500}
          height={500}
          alt=""
          className="object-contain w-full sm:w-3/4 md:w-[100%] lg:w-[100%]"
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitPatient)}
          className="space-y-6 relative sign_in-form"
        >
          <div className="flex justify-between items-center">
            <Link
              href="/auth/patient-register"
              className="text-[0.89rem] font-semibold sign_border"
            >
              Sign up
            </Link>
            <Link
              href="/auth/doctor-register"
              className="text-[1rem] font-semibold text-[#01a69c]"
            >
              Patient
            </Link>
            <Link href="/auth/login" className="text-[0.89rem] font-semibold">
              Sign in
            </Link>
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Fullname"
                      type="text"
                      className="Input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="University"
                      type="text"
                      className="Input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-9 ">
                      <div className="flex items-center space-x-2 text-[0.78rem] font-semibold">
                        <label htmlFor="gender" className="">
                          Male
                        </label>
                        <Checkbox id="gender1" {...field} className="checkbox" />
                      </div>
                      <div className="flex items-center space-x-2 text-[0.78rem] font-semibold">
                        <label htmlFor="gender" className="">
                          Female
                        </label>
                        <Checkbox id="gender2" {...field} className="checkbox" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Email"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="+234 810 000 0000"
                      type="text"
                      className="Input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hostaladdress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Hostel Address"
                      type="text"
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
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Password"
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
            Sign up
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
