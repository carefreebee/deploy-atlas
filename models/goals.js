import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Goals = {
  async postGoals(
    officeVision,
    valueProposition,
    strategicGoals,
    strategicGoals2,
    strategicGoals3,
    startDate,
    endDate,
    department_id
  ) {
    try {
      await prisma.inputGoal.create({
        data: {
          vision: officeVision,
          proposition: valueProposition,
          goals: strategicGoals,
          goals2: strategicGoals2,
          goals3: strategicGoals3,
          startDate,
          endDate,
          departmentId: department_id,
        },
      });
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getLatestGoalsByDepartmentId(department_id) {
    try {
      const result = await prisma.inputGoal.findFirst({
        where: { departmentId: department_id },
        orderBy: { id: "desc" },
      });

      return result;
    } catch (error) {
      console.error("Error fetching goal settings:", error);
      throw error;
    }
  },

  async updateGoalsById(id, vision, proposition, goals, goals2, goals3, startDate, endDate) {
    try {
      const result = await prisma.inputGoal.update({
        where: { id },
        data: {
          vision,
          proposition,
          goals,
          goals2,
          goals3,
          startDate,
          endDate,
        },
      });

      return result ? true : false;
    } catch (error) {
      console.error("Error updating goals details:", error);
      throw new Error("An error occurred while updating goals details.");
    }
  },
};

export default Goals;
