// models/getRows.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getRows = {
  async getRows() {
    try {
      const rows = await prisma.s_OStrat.findMany({
        where: {
          sOResponses: {
            not: null,
          },
        },
        select: {
          sOResponses: true,
        },
      });

      // Extracting the 'sOResponses' field from each row
      const responses = rows.map((row) => row.s_oResponses);

      return responses;
    } catch (error) {
      console.error("Error fetching rows:", error);
      return [];
    }
  },
};

export default getRows;
