import { useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

// en el field viene el onTouch, onChange
// en props viene lo adicional como placeholder, etc
export const MyTextInput = ({ label, ...props }: Props) => {
    // el field va ver el useContext (contexto) y bsuca el elemento
    const [ field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{ label }</label>
            <input className="text-input" {...field} {...props}/>
            {
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            }
        </>
    )
}
