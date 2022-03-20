import { UserInfoDto } from "../../data/dtos/auth";
import { BookDto } from "../../data/dtos/book";

export interface Store {
    books: BookState;
    auth: AuthState
}

export interface BookState {
    items: BookDto[];
    totalCount: number;
    loading: boolean;
    insertStatus: CallStatus;
}

export interface AuthState {
    accessToken: string;
    expiresIn: string;
    userInfo: UserInfoDto;
    isLoading: boolean;
}
 

export enum CallStatus {
    idle = "idle",
    pending = "pending",
    fullfiled = "fullfiled",
    rejected = "rejected"
}