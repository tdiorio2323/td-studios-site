"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    brand: z.string().min(2, "Brand / business name is required"),
    services: z.array(z.string()).min(1, "Select at least one service"),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    notes: z.string().optional(),
});

export type ContactFormState = {
    ok: boolean;
    errors?: {
        [K in keyof z.infer<typeof contactSchema>]?: string[];
    };
    message?: string;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const raw = {
        name: formData.get("name"),
        email: formData.get("email"),
        brand: formData.get("brand"),
        services: formData.getAll("services") as string[],
        budget: formData.get("budget") ?? "",
        timeline: formData.get("timeline") ?? "",
        notes: formData.get("notes") ?? "",
    };

    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
        return {
            ok: false,
            errors: parsed.error.flatten().fieldErrors,
        };
    }

    const data = parsed.data;

    try {
        // Submit to Formspree
        const response = await fetch("https://formspree.io/f/movkvrpz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                brand: data.brand,
                services: data.services.join(", "),
                budget: data.budget || "Not specified",
                timeline: data.timeline || "Not specified",
                notes: data.notes || "No additional notes",
            }),
        });

        if (!response.ok) {
            console.error("Formspree submission failed:", await response.text());
            return {
                ok: false,
                message: "Failed to send message. Please try again.",
            };
        }

        console.log("TD Studios contact form submitted successfully:", data.email);
        return { ok: true };
    } catch (error) {
        console.error("Error submitting to Formspree:", error);
        return {
            ok: false,
            message: "An error occurred. Please try again later.",
        };
    }
}
