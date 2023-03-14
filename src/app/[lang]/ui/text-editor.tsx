import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface QuillInputProps extends ReactQuillProps {
  name: string;
  isForm?: boolean;
  label?: string;
}

export default function QuillInput({
  isForm = true,
  name = "",
  label,
  ...props
}: QuillInputProps) {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => (
        <div>
          {Boolean(label) && (
            <label
              htmlFor={name}
              className={
                " text-start block mb-2 text-base  w-full text-dark-100 font-normal"
              }
            >
              {label}
            </label>
          )}
          <ReactQuill
            value={field.value}
            onChange={field.onChange(field.name)}
            {...props}
            onBlur={() => undefined}
          />

          <div className="text-red-600 text-base text-start">
            <ErrorMessage name={name} />
          </div>
        </div>
      )}
    </Field>
  ) : (
    <ReactQuill {...props} />
  );
}
