import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/input"
import { api } from "../api/api"
import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const SignIn = () => {
    const [error, setError] = useState("")

    const { setSession } = useUserStore()
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        try {
            const data = await api.loginUser(user)
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
                <h1 className="auth-title">Вход</h1>
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
                        id="password"
                        name="password"
                        type="password"
                        label="Введите пароль"
                        required
                        placeholder="Введите пароль"
                    />
                    <Button>Войти</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={"/signup"}>Регистрация</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SignIn
