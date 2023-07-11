'use client'
import { format } from 'date-fns'
import React from 'react'
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input as BaseInput } from './ui/input'

interface CustomFormFieldProps<FormState> {
  name: string
  label: string
  placeholder?: string
  description?: string
  Input?: React.FC<{
    register
    name: string
    placeholder: string
    field: ControllerRenderProps<FieldValues, Path<FormState>>
    isSubmitting: boolean
  }>
  className?: string
}

export function CustomFormField<FormState>({
  name,
  label,
  placeholder,
  description,
  Input,
  className,
}: CustomFormFieldProps<FormState>) {
  const {
    control,
    register,
    formState: { isSubmitting },
  } = useFormContext()
  return (
    <FormField
      control={control}
      name={name as Path<FormState>}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
          <FormControl>
            {Input({ register, name, placeholder, field, isSubmitting })}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export const TextInput = ({ field, placeholder, isSubmitting }) => {
  return (
    <BaseInput
      type="string"
      disabled={isSubmitting}
      onFocus={(e) => {
        const goToLastCharacter = () => {
          e.target.selectionStart = e.target.value.length
        }
        goToLastCharacter()
      }}
      {...(field as ControllerRenderProps)}
      placeholder={placeholder || ''}
    />
  )
}

export const BaseDateInput = ({ field, placeholder, isSubmitting }) => {
  const extractMonth = (dateString: string) => {
    const [year, month] = format(new Date(dateString), 'yyyy-MM').split('-')
    const sanitizedMouth = String(Number(month) + 1).padStart(2, '0')
    const sanitizedDate = `${year}-${sanitizedMouth}`

    return sanitizedDate
  }
  const fieldProps: ControllerRenderProps = {
    ...(field as ControllerRenderProps),
    value: extractMonth(field.value),
  }
  return (
    <BaseInput
      type="month"
      lang="pt-BR"
      disabled={isSubmitting}
      {...fieldProps}
      placeholder={placeholder || ''}
    />
  )
}

export const NumberInput = ({
  register,
  name,
  placeholder,
  field,
  isSubmitting,
}) => {
  return (
    <BaseInput
      type="number"
      placeholder={placeholder || ''}
      disabled={isSubmitting}
      {...(field as ControllerRenderProps)}
      {...register(name, { valueAsNumber: true })}
    />
  )
}
