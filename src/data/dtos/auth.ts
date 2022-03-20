export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface UserInfoDto {
    isAuthenticated: boolean;
    firstName: string;
    lastName: string;
    email: string;
}

export interface AuthResultDto {
    accessToken: string;
    expiresIn: string;
    userInfo: UserInfoDto
}