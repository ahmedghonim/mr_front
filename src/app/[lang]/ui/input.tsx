import clsx from "clsx";
import { FieldProps, Field, ErrorMessage } from "formik";
import React, { FC } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isForm?: boolean;
  type?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  error?: boolean;
  StartComponent?: React.FC;
  EndComponent?: React.FC;
  isSearching?: boolean;
  ref?: any;
}
const Input: FC<InputProps> = ({ name, isForm = true, ...props }) => {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        return (
          <div className="w-full">
            <CustomInput
              {...props}
              {...field}
              name={name}
              error={Boolean(Boolean(touched[name]) && errors[name])}
            />
            <div className="text-error-100 text-base text-start">
              <ErrorMessage name={name} />
            </div>
          </div>
        );
      }}
    </Field>
  ) : (
    <CustomInput {...props} name={name} />
  );
};
export default Input;

const CustomInput: React.FC<InputProps> = ({
  EndComponent,
  StartComponent,
  error = false,
  isSearching,
  name,
  type = "text",
  value,
  placeholder,
  label = null,
  ref,
  ...props
}) => {
  const { className = "", required, ...otherProps } = props;
  return (
    <div className="relative w-full justify-between">
      {Boolean(label) && (
        <label
          htmlFor={name}
          className={
            "text-start block mb-2 text-base  w-full text-dark-200  font-normal"
          }
        >
          {label}
          {required === true && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        ref={ref}
        required={required}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder ?? ""}
        type={type}
        className={clsx(
          "w-full rounded-md h-10 border border-dark-300 placeholder:text-dark-300  bg-transparent indent-4 ",
          {
            "border-error-100": error,
          },
          { "opacity-60 cursor-not-allowed": otherProps.disabled }
        )}
        {...otherProps}
      />
    </div>
  );
};
