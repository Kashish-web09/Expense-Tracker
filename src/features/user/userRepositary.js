import { getDB } from "../../config/mongoDb.js";
import { ApplicationError } from "../../errrorHandler/ApplicationError.js";

class UserRepository {

    async findUserByEmail(email) {
        try {
            const db = getDB();

            return await db
                .collection("users")
                .findOne({ email });

        } catch (err) {
            throw new ApplicationError(
                "Database Error",
                500
            );
        }
    }

    async addUser(user) {
        try {
            const db = getDB();

            const result = await db
                .collection("users")
                .insertOne(user);

            return result;

        } catch (err) {
            throw new ApplicationError(
                "Database Error",
                500
            );
        }
    }

    async getAllUsers() {
        try {
            const db = getDB();

            return await db
                .collection("users")
                .find()
                .toArray();

        } catch (err) {
            throw new ApplicationError(
                "Database Error",
                500
            );
        }
    }

    async updatePassword(email, newPassword) {
        try {
            const db = getDB();

            const result = await db
                .collection("users")
                .updateOne(
                    { email },
                    { $set: { password: newPassword } }
                );

            return result.modifiedCount > 0;

        } catch (err) {
            throw new ApplicationError(
                "Database Error",
                500
            );
        }
    }
}

export default UserRepository;