import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id);

        if (user.admin === false) {
            throw new Error("Only admins can list all users!");
        }

        if (!user) {
            throw new Error("User does not exists!");
        }

        const allUsers = this.usersRepository.list();

        return allUsers;
    }
}

export { ListAllUsersUseCase };
