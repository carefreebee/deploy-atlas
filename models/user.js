// models/user.js

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const User = {
  async register(username, email, password, departmentId) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
          department: {
            connect: {
              id: departmentId,
            },
          },
        },
      });

      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async findOne(email) {
    try {
      return await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async findUsername(username) {
    try {
      return await prisma.user.findUnique({
        where: {
          username: username,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },
};

export default User;
