"use server"

import { getErrorMessage, validateString } from "@/lib/utils"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message')
    const senderEmail = formData.get('senderEmail')

    if (!validateString(senderEmail, 200)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message, 500)) {
        return {
            error: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'thiagobuenogarcia1@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string,
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
}