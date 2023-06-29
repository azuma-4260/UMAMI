import React, { useState } from 'react';
import Icon from '../icon.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignupUsernameChange = (event) => {
    setSignupUsername(event.target.value);
  };

  const handleSignupPasswordChange = (event) => {
    setSignupPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // ログイン処理を実行するためのコードを追加する

    // ログイン成功時の処理やエラーハンドリングを実装する

    // 例:
    if (username === 'admin' && password === 'password') {
      alert('ログイン成功');
    } else {
      alert('ログイン失敗');
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    // サインアップ処理を実行するためのコードを追加する

    // サインアップ成功時の処理やエラーハンドリングを実装する

    // 例:
    if (signupUsername && signupPassword) {
      alert('サインアップ成功');
    } else {
      alert('サインアップ失敗');
    }
  };

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg border border-gray-300 shadow">
        <div className="px-6 py-8">
          <div className="flex justify-center">
            <img src={Icon} alt="Icon" className="w-32 h-32 mb-4" />
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-center">UMAMI</h2>
          {showSignUp ? (
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-6">
                <label htmlFor="signupUsername" className="block text-gray-700 font-medium mb-1">
                  ユーザー名:
                </label>
                <input
                  type="text"
                  id="signupUsername"
                  value={signupUsername}
                  onChange={handleSignupUsernameChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="signupPassword" className="block text-gray-700 font-medium mb-1">
                  パスワード:
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  value={signupPassword}
                  onChange={handleSignupPasswordChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                サインアップ
              </button>
              <div className="text-center mt-4">
                <span className="text-gray-600">既にアカウントをお持ちですか？</span>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-blue-500 font-semibold focus:outline-none"
                >
                  ログインへ
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-6">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                  ユーザー名:
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  パスワード:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                ログイン
              </button>
              <div className="text-center mt-4">
                <span className="text-gray-600">アカウントをお持ちではありませんか？</span>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-blue-500 font-semibold focus:outline-none"
                >
                  サインアップへ
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
