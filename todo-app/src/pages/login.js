import Layout from '../components/layout'
import Input from '../components/input'
import Button from '../components/button'
import styles from '../styles/index.module.css'

export default function Login() {
  return (
    <Layout title="Login">
      <h1>Login</h1>
      <form className={styles.formContainer}>
        <Input />
        <Input />
        <Button title="Login" />
      </form>
    </Layout>
  )
}