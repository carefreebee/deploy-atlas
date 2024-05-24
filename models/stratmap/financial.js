import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const FinancialEntity = {
  async postFinancialEntity(input, departmentId) {
    try {
      await prisma.financialEntity.create({
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
      return await prisma.financialEntity.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error fetching financial entities:", error);
      return [];
    }
  },

  async editFinancialEntity(id, input) {
    try {
      const result = await prisma.financialEntity.update({
        where: {
          id: id,
        },
        data: {
          input: input,
        },
      });

      if (result) {
        return { success: true, message: "Financial entity updated successfully" };
      } else {
        return { success: false, message: "Failed to update financial entity" };
      }
    } catch (error) {
      console.error("Error updating financial entity:", error);
      return { success: false, message: "An error occurred while updating financial entity" };
    }
  },

  async deleteFinancialEntity(id) {
    try {
      const result = await prisma.financialEntity.delete({
        where: {
          id: id,
        },
      });

      if (result) {
        return { success: true, message: "Financial entity deleted successfully" };
      } else {
        return { success: false, message: "Failed to delete financial entity" };
      }
    } catch (error) {
      console.error("Error deleting financial entity:", error);
      return { success: false, message: "An error occurred while deleting financial entity" };
    }
  },
};

export default FinancialEntity;
