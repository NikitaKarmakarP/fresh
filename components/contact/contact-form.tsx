"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <section className="p-10 lg:p-16 bg-white rounded-2xl shadow-sm">
      <form className="space-y-8 max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-base font-medium text-gray-800 mb-2">
              First Name
            </label>
            <Input id="firstName" placeholder="Enter your first name" className="h-12 text-base rounded-lg shadow-sm" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-base font-medium text-gray-800 mb-2">
              Last Name
            </label>
            <Input id="lastName" placeholder="Enter your last name" className="h-12 text-base rounded-lg shadow-sm" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-2">
            Email Address
          </label>
          <Input id="email" type="email" placeholder="Enter your email address" className="h-12 text-base rounded-lg shadow-sm" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-base font-medium text-gray-800 mb-2">
            Phone Number
          </label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" className="h-12 text-base rounded-lg shadow-sm" />
        </div>

        <div>
          <label htmlFor="subject" className="block text-base font-medium text-gray-800 mb-2">
            Subject
          </label>
          <Input id="subject" placeholder="What is this regarding?" className="h-12 text-base rounded-lg shadow-sm" />
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-2">
            Message
          </label>
          <Textarea id="message" rows={6} placeholder="Tell us more about your enquiry…" className="text-base rounded-lg shadow-sm" />
        </div>

        <Button className="w-full py-4 text-base rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 gap-2">
          Send Message
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </section>
  )
}
