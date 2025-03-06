import React, { useState, useRef } from "react";
import { Mail, Lock, LogIn, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const users = [
    { email: "thai@gmail.com", password: "12345" },
    { email: "phat@gmail.com", password: "12345" },
    { email: "nghi@gmail.com", password: "12345" },
];

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            console.log("Login successful", { email });
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            window.location.reload();
        } else {
            alert("Sai email hoặc mật khẩu!");
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-primary-linear flex items-center justify-center p-4 animate-gradient relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[10px] opacity-50">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary_yellow/20 blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary_yellow/10 blur-[100px] animate-float"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary_yellow/15 blur-[100px] animate-float-delayed"></div>
                </div>
            </div>

            <div className="w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-[1.02] relative z-10">
                <div className="text-center mb-8">
                    <LogIn className="mx-auto h-16 w-16 text-primary_yellow animate-pulse" />
                    <h2 className="mt-6 text-3xl font-bold text-primary_yellow">
                        Chào mừng bạn đến với Amazing Food
                    </h2>
                    <p className="mt-2 text-gray-400">Nhập tài khoản của bạn</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-primary_brown/40 p-8 rounded-xl shadow-lg"
                >
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-primary_yellow mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="email"
                                    ref={emailRef}
                                    className="w-full pl-10 py-3 rounded-lg bg-primary_brown/60 border border-gray-700 text-gray-200 placeholder-gray-500"
                                    placeholder="Nhập email của bạn"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary_yellow mb-2">
                                Mật khẩu
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="password"
                                    ref={passwordRef}
                                    className="w-full pl-10 py-3 rounded-lg bg-primary_brown/60 border border-gray-700 text-gray-200 placeholder-gray-500"
                                    placeholder="Nhập mật khẩu của bạn"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary_yellow text-primary_brown font-semibold py-3 rounded-lg hover:bg-primary_yellow/90"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                            ) : (
                                "Đăng nhập"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
