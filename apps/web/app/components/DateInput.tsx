import React from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from './ui/form'

import FirstJobPicker from './FirstJobPicker'

const DateInput = ({ label, description, name }) => {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FirstJobPicker dob={field.value} setDOB={field.onChange} />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DateInput
