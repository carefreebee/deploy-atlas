// models/Bsc.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Bsc = {
  async getFinancialBSCByDepartmentId(departmentId) {
    try {
      return await prisma.financialBSC.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async insertFinancialBscData(data) {
    try {
      const result = await prisma.financialBSC.create({
        data: data,
      });
      console.log("Data inserted successfully");
      return result;
    } catch (error) {
      console.error("Error during insertion:", error);
      throw error;
    }
  },

  async updateFinancialBscData(id, data) {
    try {
      const result = await prisma.financialBSC.update({
        where: {
          id: id,
        },
        data: data,
      });
      console.log("Data updated successfully");
      return result;
    } catch (error) {
      console.error("Error during update:", error);
      throw error;
    }
  },

  async getStakeholderBSCByDepartmentId(departmentId) {
    try {
      return await prisma.stakeholderBSC.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async insertStakeholderBscData(data) {
    try {
      const result = await prisma.stakeholderBSC.create({
        data: data,
      });
      console.log("Data inserted successfully");
      return result;
    } catch (error) {
      console.error("Error during insertion:", error);
      throw error;
    }
  },

  async updateStakeholderBscData(id, data) {
    try {
      const result = await prisma.stakeholderBSC.update({
        where: {
          id: id,
        },
        data: data,
      });
      console.log("Data updated successfully");
      return result;
    } catch (error) {
      console.error("Error during update:", error);
      throw error;
    }
  },

  async getInternalBSCByDepartmentId(departmentId) {
    try {
      return await prisma.internalBSC.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async insertInternalBscData(data) {
    try {
      const result = await prisma.internalBSC.create({
        data: data,
      });
      console.log("Data inserted successfully");
      return result;
    } catch (error) {
      console.error("Error during insertion:", error);
      throw error;
    }
  },

  async updateInternalBscData(id, data) {
    try {
      const result = await prisma.internalBSC.update({
        where: {
          id: id,
        },
        data: data,
      });
      console.log("Data updated successfully");
      return result;
    } catch (error) {
      console.error("Error during update:", error);
      throw error;
    }
  },

  async getLearningBSCByDepartmentId(departmentId) {
    try {
      return await prisma.learningBSC.findMany({
        where: {
          departmentId: departmentId,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async insertLearningBscData(data) {
    try {
      const result = await prisma.learningBSC.create({
        data: data,
      });
      console.log("Data inserted successfully");
      return result;
    } catch (error) {
      console.error("Error during insertion:", error);
      throw error;
    }
  },

  async updateLearningBscData(id, data) {
    try {
      const result = await prisma.learningBSC.update({
        where: {
          id: id,
        },
        data: data,
      });
      console.log("Data updated successfully");
      return result;
    } catch (error) {
      console.error("Error during update:", error);
      throw error;
    }
  },
};

export default Bsc;