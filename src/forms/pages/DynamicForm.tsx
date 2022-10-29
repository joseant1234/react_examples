import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import  formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          { (formik) => (
            <Form noValidate>
              { formJson.map(({ type, name, placeholder, label, options })  => {
                if (type === 'input' || type === 'password' || type === 'email') {
                  return <MyTextInput
                            key={name}
                            type={(type as any)}
                            name={name}
                            label={label}
                            placeholder={placeholder}
                          />
                } else if (type === 'select') {
                  return (
                    <MySelect
                      key={name}
                      label={label}
                      name={name}
                    >
                      <option value="">Select an option</option>
                      {
                        options?.map(({ id, label }) => (
                          <option key={id} value={id}>{label}</option>
                        ))
                      }

                    </MySelect>
                  )
                }
                throw new Error(`El type: ${type} no es soportado`)
              })}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
