"use client";
import { DictionaryType } from "@get-dictionary";
import TextEditor from "@ui/text-editor";
import UploadImage from "@ui/upload-image";
import Button from "@ui/button";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Modal from "@ui/modal";
import { useSelector, useDispatch } from "react-redux";
import { setModal, modalState } from "app/redux/features/modal";
import Input from "@ui/input";
const validationSchema = yup.object({
  image: yup.string().required("asdasd"),
  en_text: yup.string().required("a7a").min(10),
  ar_text: yup.string().required("a7a").min(10),
});

export type FormData = yup.InferType<typeof validationSchema>;

function FormData({ t }: { t: DictionaryType }) {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const initialValues: FormData = {
    image: "",
    ar_text: "",
    en_text: "",
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className="flex gap-3">
        <div className="h-[250px] w-[180px]">
          <UploadImage name="image" />
        </div>
        <div className="flex-1 flex-col flex gap-4">
          <Input name="ar_title" label={t["title-lang-ar"]} />
          <TextEditor name="ar_text" label={t["text-lang-ar"]} />
          <Input name="en_title" label={t["title-lang-ar"]} />
          <TextEditor name="en_text" label={t["text-lang-en"]} />
          <div className="flex-1 flex justify-end">
            <Button primary type="submit">
              {t.submit}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default FormData;
