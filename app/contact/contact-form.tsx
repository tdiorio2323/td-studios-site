"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";

const initialState: ContactFormState = { ok: false };

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            size="lg"
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white border-0"
        >
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                </>
            ) : (
                "Send Request"
            )}
        </Button>
    );
}

export function ContactForm() {
    const [state, formAction] = useActionState(submitContactForm, initialState);

    if (state.ok) {
        return (
            <div className="bg-bg-elevated/30 p-8 rounded-2xl border border-border-subtle text-center py-16">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-text-muted max-w-md mx-auto">
                    Thanks for reaching out. We've received your project details and will get back to you within 24 hours.
                </p>
                <Button
                    variant="outline"
                    className="mt-8 border-border-subtle hover:bg-bg-body"
                    onClick={() => window.location.reload()}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form action={formAction} className="space-y-8 bg-bg-elevated/30 p-8 rounded-2xl border border-border-subtle">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        className="bg-bg-body border-border-subtle"
                        required
                    />
                    {state.errors?.name && (
                        <p className="text-xs text-red-400">{state.errors.name[0]}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        className="bg-bg-body border-border-subtle"
                        required
                    />
                    {state.errors?.email && (
                        <p className="text-xs text-red-400">{state.errors.email[0]}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="brand">Brand / Business Name</Label>
                <Input
                    id="brand"
                    name="brand"
                    placeholder="Acme Corp"
                    className="bg-bg-body border-border-subtle"
                    required
                />
                {state.errors?.brand && (
                    <p className="text-xs text-red-400">{state.errors.brand[0]}</p>
                )}
            </div>

            <div className="space-y-4">
                <Label>What are you looking for?</Label>
                <div className="grid gap-4 sm:grid-cols-2">
                    {["Website Design & Build", "Branding & Identity", "Social Media & Content", "Other"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={item} name="services" value={item} />
                            <Label htmlFor={item} className="font-normal cursor-pointer">{item}</Label>
                        </div>
                    ))}
                </div>
                {state.errors?.services && (
                    <p className="text-xs text-red-400">{state.errors.services[0]}</p>
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select name="budget">
                        <SelectTrigger className="bg-bg-body border-border-subtle">
                            <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5-10k">$5k - $10k</SelectItem>
                            <SelectItem value="10-25k">$10k - $25k</SelectItem>
                            <SelectItem value="25-50k">$25k - $50k</SelectItem>
                            <SelectItem value="50k+">$50k+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select name="timeline">
                        <SelectTrigger className="bg-bg-body border-border-subtle">
                            <SelectValue placeholder="Select a timeline" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="3-months">3 Months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="notes">Project Details</Label>
                <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us more about your project goals, inspiration, and requirements..."
                    className="min-h-[150px] bg-bg-body border-border-subtle"
                />
            </div>

            <SubmitButton />
        </form>
    );
}
