import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/input"
import { api } from "../api/api"
import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"


const SignUp = () => {
    const [error, setError] = useState("")

    const { setSession } = useUserStore()
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value !== e.target.password2.value) {
            setError("Пароли не своападают")
            return
        }

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        try {
            const data = await api.registerUser(user)
            setSession(data.data)
            navigate("/")
        } catch (error) {
            setError(error.responce.data.error)
            console.error(error)
        }
    }
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
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
                        id="password2"
                        name="password2"
                        type="password"
                        label="Подтверждение пароля"
                        required
                        placeholder="Повторите пароль"
                    />
                    <Button>Зарегистрироваться</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={"/signin"}>Вход</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SignUp
