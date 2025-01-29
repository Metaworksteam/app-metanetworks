"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"

const formSchema = z.object({
  organizationName: z.string().min(2, "Organization name is required"),
  ceoName: z.string().min(2, "CEO name is required"),
  stakeholders: z.string().min(2, "Stakeholders information is required"),
  managementTeam: z.object({
    ciso: z.string().min(2, "CISO name is required"),
    itSecurityManager: z.string().min(2, "IT Security Manager name is required"),
    others: z.string().optional(),
  }),
  implementationDetails: z.string().optional(),
  evidenceReference: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface OrganizationFormProps {
  onSubmit: (data: FormValues) => void
  defaultValues?: Partial<FormValues>
}

export function OrganizationForm({ onSubmit, defaultValues }: OrganizationFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      organizationName: "",
      ceoName: "",
      stakeholders: "",
      managementTeam: {
        ciso: "",
        itSecurityManager: "",
        others: "",
      },
      implementationDetails: "",
      evidenceReference: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="ceoName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEO Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stakeholders"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stakeholders</FormLabel>
              <FormDescription>
                List key stakeholders involved in compliance management
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4 border rounded-lg p-4">
          <h3 className="font-medium">Management Team</h3>
          
          <FormField
            control={form.control}
            name="managementTeam.ciso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CISO</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="managementTeam.itSecurityManager"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IT Security Manager</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="managementTeam.others"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Team Members</FormLabel>
                <FormDescription>
                  List any additional management team members
                </FormDescription>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="implementationDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Implementation Details</FormLabel>
              <FormDescription>
                Provide details about how this control is implemented
              </FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="evidenceReference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Evidence Reference</FormLabel>
              <FormDescription>
                Reference any supporting documentation or evidence
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  )
}
