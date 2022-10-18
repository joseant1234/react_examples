import '../styles/styles.css';

export const FormikBasicPage = () => {
  return (
    <div>
        <h1>Formik Basic</h1>
        <form noValidate>
            <label htmlFor='firstName'>First name</label>
            <input
                type="text"
                name="firstName"
            />
            <span>First name is required</span>

            <label htmlFor='lastName'>Last name</label>
            <input
                type="text"
                name="lastName"
            />
            <span>Last name is required</span>

            <label htmlFor='email'>Email</label>
            <input
                type="email"
                name="email"
            />
            <span>Email is required</span>
            <span>Check for a valid email format</span>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
