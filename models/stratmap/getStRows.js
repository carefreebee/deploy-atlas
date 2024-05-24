// models/getRows.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRows = {
  async getRows() {
    try {
      const rows = await prisma.s_TStrat.findMany({
        where: {
          sTResponses: {
            not: null,
          },
        },
        select: {
          sTResponses: true,
        },
      });

      // Extracting the 'sTResponses' field from each row
      const responses = rows.map((row) => row.s_tResponses);

      return responses;
    } catch (error) {
      console.error("Error fetching rows:", error);
      return [];
    }
  },
};

export default getRows;
