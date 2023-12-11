'use server'
import { Button } from 'app/components/ui/button'
import { Input } from 'app/components/ui/input'
import { Label } from 'app/components/ui/label'
import { Textarea } from 'app/components/ui/textarea'
import { Field } from './Field'
import { Fields } from './Fields'
import { SkillsField } from './SkillsField'
import { saveTestimonial } from './saveTestimonial'

export async function TestimonialForm({ email }: { email: string }) {
  return (
    <form
      action={saveTestimonial}
      className="grid w-full space-y-3 lg:space-y-6"
    >
      <section className="space-y-1">
        <Label htmlFor={Fields.Email}>Email</Label>
        <Input
          name={Fields.Email}
          id={Fields.Email}
          type="email"
          readOnly
          value={email}
        />
      </section>
      <Field field={Fields.Company} required label="Qual empresa?" />
      <Field field={Fields.Role} label="Qual cargo?" required />
      <SkillsField />
      <section className="space-y-1">
        <Label htmlFor={Fields.Testimonial}>Dê mais detalhes</Label>
        <Textarea id={Fields.Testimonial} name={Fields.Testimonial} />
      </section>
      <Button className="justify-self-end rounded-full px-6 transition-all">
        Enviar
      </Button>
    </form>
  )
}