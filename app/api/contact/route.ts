import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
    const data = await req.json()

    try {
        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured")
            throw new Error("Email service not configured")
        }
        const resend = new Resend(process.env.RESEND_API_KEY)

        const recipients = ["adamfarrow1@gmail.com", "jfeliz@relentlessenergy.org"]

        // Email subject for commodity quote request - more specific and less generic
        const emailSubject = `📦 Commodity Quote: ${data.commodity} - ${data.firstName} ${data.lastName} (${data.company})`

        // Send individual emails to ensure delivery to all recipients
        const emailPromises = recipients.map(async (email) => {
            return resend.emails.send({
                from: "Contact Form <leads@global-commodity-hub.com>", // Use Resend's default domain initially
                to: [email],
                subject: emailSubject,
                replyTo: data.email,
                text: `
New Commodity Quote Request

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Company: ${data.company}
- Email: ${data.email}
${data.phone ? `- Phone: ${data.phone}` : ''}

Commodity Details:
- Commodity of Interest: ${data.commodity}
${data.quantity ? `- Monthly Quantity: ${data.quantity} MT` : ''}
${data.destination ? `- Destination Port: ${data.destination}` : ''}

${data.message ? `Additional Requirements:
${data.message}` : ''}

Next Steps:
- Respond within 24 hours as promised
- Prepare competitive pricing for ${data.commodity}
- Include shipping options and timeline
- Provide quality specifications and certifications

This quote request was sent from the Global Commodity Hub website.
Priority: High - Customer expects response within 24 hours.
                `,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
                        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h1 style="color: #0f172a; margin: 0; font-size: 28px;">📦 New Commodity Quote Request</h1>
                                <p style="color: #666; margin: 10px 0 0 0;">Received: ${new Date().toLocaleString()}</p>
                            </div>
                            
                            <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-bottom: 25px;">
                                <h3 style="color: #f59e0b; margin: 0 0 15px 0;">📞 Contact Information</h3>
                                <p style="margin: 5px 0;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                                <p style="margin: 5px 0;"><strong>Company:</strong> ${data.company}</p>
                                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #f59e0b;">${data.email}</a></p>
                                ${data.phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #f59e0b;">${data.phone}</a></p>` : ''}
                            </div>
                            
                            <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-bottom: 25px;">
                                <h3 style="color: #3b82f6; margin: 0 0 15px 0;">📦 Commodity Details</h3>
                                <p style="margin: 5px 0;"><strong>Commodity of Interest:</strong> ${data.commodity}</p>
                                ${data.quantity ? `<p style="margin: 5px 0;"><strong>Monthly Quantity:</strong> ${data.quantity} MT</p>` : ''}
                                ${data.destination ? `<p style="margin: 5px 0;"><strong>Destination Port:</strong> ${data.destination}</p>` : ''}
                            </div>
                            
                            ${data.message ? `
                                <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; border-left: 4px solid #22c55e; margin-bottom: 25px;">
                                    <h3 style="color: #22c55e; margin: 0 0 15px 0;">💬 Additional Requirements</h3>
                                    <p style="margin: 0; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
                                </div>
                            ` : ''}
                            
                            <div style="background-color: #fef2f2; padding: 20px; border-radius: 6px; border-left: 4px solid #ef4444; margin-bottom: 25px;">
                                <h3 style="color: #ef4444; margin: 0 0 15px 0;">⚡ Next Steps</h3>
                                <ul style="margin: 0; padding-left: 20px; color: #374151;">
                                    <li>Respond within 24 hours as promised</li>
                                    <li>Prepare competitive pricing for ${data.commodity}</li>
                                    <li>Include shipping options and timeline</li>
                                    <li>Provide quality specifications and certifications</li>
                                </ul>
                            </div>
                            
                            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                                <p style="color: #666; font-size: 14px; margin: 0;">
                                    This quote request was sent from the Global Commodity Hub website.<br>
                                    <strong>Priority:</strong> High - Customer expects response within 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
            })
        })

        const emailResults = await Promise.allSettled(emailPromises)

        // Log results for each email
        emailResults.forEach((result, index) => {
            const email = recipients[index]
            if (result.status === 'fulfilled') {
                if (result.value.error) {
                    console.error(`❌ Error for ${email}:`, result.value.error)
                } else {
                    console.log(`✅ Email sent successfully to ${email}`)
                }
            } else {
                console.error(`❌ Failed to send email to ${email}:`, result.reason)
            }
        })

        // Check if at least one email was sent successfully
        const successfulEmails = emailResults.filter(result =>
            result.status === 'fulfilled' && !result.value.error
        ).length

        if (successfulEmails === 0) {
            throw new Error("Failed to send email to any recipient")
        }

        return NextResponse.json({
            message: "Quote request submitted successfully",
            emailsSent: successfulEmails,
            totalRecipients: recipients.length
        })
    } catch (error) {
        console.error("Error processing contact form submission:", error)

        // More detailed error logging
        if (error instanceof Error) {
            console.error("Error message:", error.message)
            console.error("Error stack:", error.stack)
        }

        return new NextResponse(
            JSON.stringify({
                error: "Error processing quote request",
                details: error instanceof Error ? error.message : "Unknown error"
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        )
    }
}
