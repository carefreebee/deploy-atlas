// SWStrat.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SWStrat = {
  async postSWStrat(apiResponse, department_id) {
    try {
      const result = await prisma.sWStrat.create({
        data: {
          sOResponses: apiResponse,
          departmentId: department_id,
        },
      });
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },

  async getSWStrat(department_id) {
    try {
      const result = await prisma.sWStrat.findMany({
        where: { departmentId: department_id },
      });
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },

  async deleteSWStrat(id, department_id) {
    try {
      const result = await prisma.sWStrat.deleteMany({
        where: { id: id, departmentId: department_id },
      });
      return result.count > 0;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};

export default SWStrat;
