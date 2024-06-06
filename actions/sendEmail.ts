"use server"
import { Resend } from "resend"
import { getErrorMessage, validateString } from "@/lib/utils"


const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  console.log("Running sendEmailHandler")
  console.log(formData.get("senderEmail"))
  console.log(formData.get("message"))

  const message = formData.get("message")
  const senderEmail = formData.get("senderEmail")

  if (!validateString(message, 5000) || !validateString(senderEmail, 500)) {
    return {
      error: "Please enter a valid email and/or message",
    }
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "thiagobuenogarcia1@gmail.com",
      subject: `New message from ${senderEmail}`,
      reply_to: senderEmail as string,
      text: message as string,
      html: `<h3 class='text-gray-700 text-4xl'>New message from ${senderEmail}</h3>
      <p class='text-gray-800 text-3xl'>${message}</p>`,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
}
