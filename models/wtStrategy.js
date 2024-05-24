import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const WTStrat = {
  async postWTStrat(apiResponse, departmentId) {
    try {
      await prisma.w_TStrat.create({
        data: {
          w_tResponses: apiResponse,
          department: { connect: { id: departmentId } },
        },
      });
      return { response: apiResponse, id: departmentId };
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getWTStrat(departmentId) {
    try {
      const result = await prisma.w_TStrat.findMany({
        where: { departmentId: departmentId },
      });
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  },

  async deleteWTStrat(id, departmentId) {
    try {
      const result = await prisma.w_TStrat.deleteMany({
        where: { id: id, departmentId: departmentId },
      });
      return result.count > 0;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },
};

export default WTStrat;
