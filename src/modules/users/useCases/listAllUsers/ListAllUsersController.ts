import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        // Cat get through const { user_id } = request.headers;
        const user_id = request.headers.user_id as string;

        try {
            const usersList = this.listAllUsersUseCase.execute({ user_id });

            return response.json(usersList);
        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListAllUsersController };
