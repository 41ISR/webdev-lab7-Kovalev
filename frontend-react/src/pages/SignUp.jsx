import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/input"
import { api } from "../api/api"

const SignUp = () => {
    const [error, setError] = useState("")
    const handleSumbit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value !== e.target.password2.value){
            setError("Пароли не своападают")
            return
        }

        const user = {
            username: e.target.username,
            email: e.target.email,
            password: e.target.password
        }

        try{
            const data = await api.registerUser(user)
            console.log(data);
        }catch (error) {
            SetError(error.message)
            console.error(error)
        }
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length >0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSumbit}>
                    <Input
                    id="username"
                    name="username"
                    type="text"
                    label="Имя пользователя"
                    required
                    placeholder="Введите имяпользователя"
                    />
                    <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Введите почту"
                    required
                    placeholder="example@mail.com"
                    />
                    <Input
                    id="password"
                    name="password"
                    type="password"
                    label="Введите пароль"
                    required
                    placeholder="Введите пароль"
                    />
                    <Input
                    id="password"
                    name="password2"
                    type="password"
                    label="Подтверждение пароля"
                    required
                    placeholder="Повторите пароль"
                    />
                    <Button>Зарегистрироваться</Button>
                </form>
            </div>
        </div>
    )
}
export default SignUp
