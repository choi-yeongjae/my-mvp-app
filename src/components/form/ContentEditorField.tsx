"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { HTMLInputTypeAttribute } from "react";
import { PlateEditor } from "@/components/editor/Plate";

type ContentEditorFieldProps = {
  form: any;
  type?: HTMLInputTypeAttribute;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
  readOnly?: boolean;
};

export default function ContentEditorField(props: ContentEditorFieldProps) {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem className={cn(props.className)}>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <div className={cn(props.readOnly && "border border-input rounded-md p-2")}>
              <PlateEditor
                defaultValue={field.value}
                {...(props.placeholder && { placeholder: props.placeholder })}
                onChange={(data) => {
                  field.onChange(data);
                }}
                className={cn("px-8 py-4 text-base")}
                readonly={props.readOnly || false}
              />
            </div>
          </FormControl>
          {!fieldState.error && props.description && <FormDescription>{props.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
