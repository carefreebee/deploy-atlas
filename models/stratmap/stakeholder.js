// models/StakeholderEntity.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const StakeholderEntity = {
  async postStakeholderEntity(input, departmentId) {
    try {
      await prisma.stakeholderEntity.create({
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
      return await prisma.stakeholderEntity.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error fetching stakeholder entities:", error);
      return [];
    }
  },

  async editStakeholderEntity(id, input) {
    try {
      await prisma.stakeholderEntity.update({
        where: {
          id: id,
        },
        data: {
          input: input,
        },
      });

      return { success: true, message: "Stakeholder entity updated successfully" };
    } catch (error) {
      console.error("Error updating Stakeholder entity:", error);
      return { success: false, message: "An error occurred while updating Stakeholder entity" };
    }
  },

  async deleteStakeholderEntity(id) {
    try {
      await prisma.stakeholderEntity.delete({
        where: {
          id: id,
        },
      });

      return { success: true };
    } catch (error) {
      console.error("Error deleting stakeholder:", error);
      return { success: false, message: "An error occurred while deleting stakeholder" };
    }
  },
};

export default StakeholderEntity;
