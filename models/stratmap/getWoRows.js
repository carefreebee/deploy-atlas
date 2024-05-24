// models/getRows.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRows = {
  async getRows() {
    try {
      const rows = await prisma.w_OStrat.findMany({
        where: {
          wOResponses: {
            not: null,
          },
        },
        select: {
          wOResponses: true,
        },
      });

      // Extracting the 'wOResponses' field from each row
      const responses = rows.map((row) => row.w_oResponses);

      return responses;
    } catch (error) {
      console.error("Error fetching rows:", error);
      return [];
    }
  },
};

export default getRows;
