// STStrat.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const STStrat = {
  async postSTStrat(apiResponse, department_id) {
    try {
      const result = await prisma.sTStrat.create({
        data: {
          sTResponses: apiResponse,
          departmentId: department_id,
        },
      });
      return result;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getSTStrat(department_id) {
    try {
      const result = await prisma.sTStrat.findMany({
        where: { departmentId: department_id },
      });
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },

  async deleteSTStrat(id, department_id) {
    try {
      const result = await prisma.sTStrat.deleteMany({
        where: { id: id, departmentId: department_id },
      });
      return result.count > 0;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};

export default STStrat;
