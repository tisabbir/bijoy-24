import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div>
            This is login page

            <Link>Login</Link>
            <Link onClick={'/register'} >register</Link>
        </div>
    );
};

export default LoginPage;