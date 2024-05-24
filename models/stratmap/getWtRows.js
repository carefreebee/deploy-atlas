// models/getRows.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRows = {
  async getRows() {
    try {
      const rows = await prisma.w_TStrat.findMany({
        where: {
          wTResponses: {
            not: null,
          },
        },
        select: {
          wTResponses: true,
        },
      });

      // Extracting the 'wTResponses' field from each row
      const responses = rows.map((row) => row.w_tResponses);

      return responses;
    } catch (error) {
      console.error("Error fetching rows:", error);
      return [];
    }
  },
};

export default getRows;
