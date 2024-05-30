import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkVerification = async () => {
            const user = auth.currentUser;
            await user.reload();
            if (user.emailVerified) {
                toast.success("Email verified successfully.");
                navigate('/login');
            } else {
                setLoading(false);
            }
        };
        const interval = setInterval(checkVerification, 5000);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className="verify_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500 '>
                        Verify Email
                    </h2>
                </div>
                <p className='text-center text-pink-500'>
                    Please check your email for the verification link. You will be redirected to the login page once your email is verified.
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;
