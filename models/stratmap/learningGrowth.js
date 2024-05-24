// models/LearningGrowthEntity.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const LearningGrowthEntity = {
  async postLGEntity(input, departmentId) {
    try {
      await prisma.learningGrowthEntity.create({
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
      return await prisma.learningGrowthEntity.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error fetching learning growth entities:", error);
      return [];
    }
  },

  async editLGEntity(id, input) {
    try {
      await prisma.learningGrowthEntity.update({
        where: {
          id: id,
        },
        data: {
          input: input,
        },
      });

      return { success: true, message: "LG entity updated successfully" };
    } catch (error) {
      console.error("Error updating LG entity:", error);
      return { success: false, message: "An error occurred while updating LG entity" };
    }
  },

  async deleteLGEntity(id) {
    try {
      await prisma.learningGrowthEntity.delete({
        where: {
          id: id,
        },
      });

      return true;
    } catch (error) {
      console.error("Error deleting learning growth entity:", error);
      return false;
    }
  },
};

export default LearningGrowthEntity;
