"use client";

import { useActionState, useEffect, useRef } from "react";
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
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { ok: false };

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            size="lg"
            className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white border-0 transition-smooth hover:scale-105"
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
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.ok && formRef.current) {
            formRef.current.reset();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [state.ok]);

    const hasErrors = !state.ok && (state.errors || state.message);

    return (
        <div className="space-y-8">
            {/* Success State */}
            {state.ok && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 sm:p-5 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-medium text-emerald-500">Message sent</h3>
                        <p className="text-sm text-emerald-500/80 mt-1">
                            We've received your request. You'll get a reply within 1–2 business days.
                        </p>
                    </div>
                </div>
            )}

            {/* Error State */}
            {hasErrors && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 sm:p-5 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-medium text-red-500">
                            {state.message || "Please fix the highlighted fields and try again."}
                        </h3>
                        {!state.message && (
                            <p className="text-sm text-red-500/80 mt-1">
                                Check the form below for details.
                            </p>
                        )}
                        {state.message && (
                            <p className="text-sm text-red-500/80 mt-1">
                                If this persists, please email studio@tdstudiosny.com.
                            </p>
                        )}
                    </div>
                </div>
            )}

            <form
                ref={formRef}
                action={formAction}
                className={cn(
                    "space-y-6 sm:space-y-8 bg-bg-elevated/30 p-6 sm:p-8 rounded-2xl border border-border-subtle",
                    state.ok && "opacity-50 pointer-events-none grayscale-[0.5] transition-all duration-500"
                )}
            >
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name <span className="text-brand-primary">*</span></Label>
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
                        <Label htmlFor="email">Email <span className="text-brand-primary">*</span></Label>
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
                    <Label htmlFor="brand">Brand / Business Name <span className="text-brand-primary">*</span></Label>
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
                    <Label>What are you looking for? <span className="text-brand-primary">*</span></Label>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {["Website Design & Build", "Branding & Identity", "Social Media & Content", "Cannabis Packaging", "Other"].map((item) => (
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
                        <p className="text-[10px] text-text-muted uppercase tracking-wider">Optional</p>
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
                        <p className="text-[10px] text-text-muted uppercase tracking-wider">Optional</p>
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
        </div>
    );
}
