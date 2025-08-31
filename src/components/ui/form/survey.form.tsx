"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils"; // varsa. Yoxdursa, className birləşdirməsini silə bilərsən.

const PhoneRegex = /^[\d\s()+-]{6,20}$/;

const schema = z.object({
  fullName: z.string().min(2, "Ad soyad ən azı 2 simvol olmalıdır"),
  email: z.string().email("Düzgün email daxil edin"),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || PhoneRegex.test(v), "Telefon formatı yanlışdır"),
  role: z.enum(["student", "developer", "designer", "other"], {
    required_error: "Rolu seçin",
  }),
  experience: z
    .number({ invalid_type_error: "İlləri rəqəmlə yazın" })
    .min(0, "Mənfi ola bilməz")
    .max(50, "50 ildən çox ola bilməz"),
  message: z
    .string()
    .max(600, "Maksimum 600 simvol")
    .optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: "Şərtlərlə razılaşın" }),
  }),
});

type FormValues = z.infer<typeof schema>;

interface AnketFormProps {
  className?: string;
  onSuccess?: (data: FormValues) => void; // istəsən göndərilən datanı burada tut
}

export default function SurveyForm({ className, onSuccess }: AnketFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      role: undefined,
      experience: 0,
      message: "",
      agree: false,
    },
    mode: "onTouched",
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: FormValues) {
    // Burada API çağırışı edə bilərsən
    // await fetch("/api/anket", { method: "POST", body: JSON.stringify(values) })
    console.log("ANKET:", values);
    onSuccess?.(values);
    reset({ ...values, message: "", agree: false }); // mesajı təmizləyək
  }

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl rounded-xl border bg-card p-6 sm:p-8",
        className
      )}
    >
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold tracking-tight">Anket</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Məlumatları doldurun, ən qısa zamanda geri dönək.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              control={control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad Soyad *</FormLabel>
                  <FormControl>
                    <Input placeholder="Məs: Cavid Məmmədov" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="mail@ornek.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="+994 xx xxx xx xx" {...field} />
                  </FormControl>
                  <FormDescription>İstəyə bağlıdır.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rol *</FormLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isSubmitting}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seçin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Tələbə</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="other">Digər</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Təcrübə (il) *</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={50}
                    step="1"
                    placeholder="0"
                    {...field}
                    value={field.value ?? 0}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qısa mesaj</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Məs: Hansı proqram üzrə maraqlanırsınız?"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Max 600 simvol.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex items-start gap-3 rounded-lg border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="m-0">Məlumatların işlənməsinə razıyam *</FormLabel>
                  <FormDescription className="text-xs">
                    Məlumatlar yalnız əlaqə üçün istifadə olunacaq.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isSubmitting}
            >
              Təmizlə
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Göndərilir..." : "Göndər"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
