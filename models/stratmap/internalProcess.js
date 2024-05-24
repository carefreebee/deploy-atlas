// models/InternalProcess.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const InternalProcess = {
  async postIPEntity(input, departmentId) {
    try {
      await prisma.internalProcessEntity.create({
        data: {
          departmentId: departmentId,
          officeTarget: input,
        },
      });
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getByDepartmentId(departmentId) {
    try {
      return await prisma.internalProcessEntity.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error fetching internal process entities:", error);
      return [];
    }
  },

  async editIPEntity(id, input) {
    try {
      await prisma.internalProcessEntity.update({
        where: {
          id: id,
        },
        data: {
          input: input,
        },
      });

      return { success: true, message: "IP entity updated successfully" };
    } catch (error) {
      console.error("Error updating IP entity:", error);
      return { success: false, message: "An error occurred while updating IP entity" };
    }
  },

  async deleteIPEntity(id) {
    try {
      await prisma.internalProcessEntity.delete({
        where: {
          id: id,
        },
      });

      return true;
    } catch (error) {
      console.error("Error deleting internal process entity:", error);
      return false;
    }
  },
};

export default InternalProcess;
