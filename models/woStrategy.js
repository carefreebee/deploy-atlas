import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const WOStrat = {
  async postWOStrat(apiResponse, departmentId) {
    try {
      await prisma.w_OStrat.create({
        data: {
          w_oResponses: apiResponse,
          department: { connect: { id: departmentId } },
        },
      });
      return { response: apiResponse, id: departmentId };
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getWOStrat(departmentId) {
    try {
      const result = await prisma.w_OStrat.findMany({
        where: { departmentId: departmentId },
      });
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },

  async deleteWOStrat(id, departmentId) {
    try {
      const result = await prisma.w_OStrat.deleteMany({
        where: { id: id, departmentId: departmentId },
      });
      return result.count > 0;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};

export default WOStrat;
