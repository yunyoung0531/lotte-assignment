import jwt from 'jsonwebtoken';

interface UserData {
    username: string;
    email: string;
    password: string;
}

// 회원가입 성공 후 JWT 토큰 생성 및 저장
const handleSignUpSuccess = (userData: UserData) => {
    try {
        // 사용자 정보를 기반으로 JWT 토큰 생성
        const token = jwt.sign(userData, process.env.REACT_APP_SECRET_KEY!);
        
        // 생성된 JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        
        // 추가적인 처리 (예: 회원가입 성공 메시지 표시 등)
    } catch (error) {
        console.error('토큰 생성 및 저장 중 오류 발생:', error);
    }
};
