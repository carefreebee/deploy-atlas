// swot.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Swot = {
  async addStrength(value, departmentId) {
    try {
      const addedStrength = await prisma.strength.create({
        data: {
          value: value,
          department: { connect: { id: departmentId } },
        },
      });
      return { success: true, data: addedStrength };
    } catch (error) {
      console.error("Error adding strength:", error);
      return { success: false, message: "An error occurred while adding strength" };
    }
  },

  async getStrengthsByDepartmentId(departmentId) {
    try {
      const strengths = await prisma.strength.findMany({
        where: { departmentId: departmentId },
        select: { id: true, value: true },
      });
      return { success: true, strengths: strengths };
    } catch (error) {
      console.error("Error fetching strengths:", error);
      return { success: false, message: "An error occurred while fetching strengths" };
    }
  },

  async editStrength(id, value, departmentId) {
    try {
      const updatedStrength = await prisma.strength.update({
        where: { id: id },
        data: { value: value },
      });
      return { success: true, updatedStrength: updatedStrength };
    } catch (error) {
      console.error("Error updating strength:", error);
      return { success: false, message: "An error occurred while updating strength" };
    }
  },

  async deleteStrength(id, departmentId) {
    try {
      await prisma.strength.delete({ where: { id: id } });
      return { success: true, message: "Strength deleted successfully" };
    } catch (error) {
      console.error("Error deleting strength:", error);
      return { success: false, message: "An error occurred while deleting strength" };
    }
  },

  async addWeakness(value, departmentId) {
    try {
      const addedWeakness = await prisma.weakness.create({
        data: {
          value: value,
          department: { connect: { id: departmentId } },
        },
      });
      return { success: true, data: addedWeakness };
    } catch (error) {
      console.error("Error adding weakness:", error);
      return { success: false, message: "An error occurred while adding weakness" };
    }
  },

  async getWeaknessesByDepartmentId(departmentId) {
    try {
      const weaknesses = await prisma.weakness.findMany({
        where: { departmentId: departmentId },
        select: { id: true, value: true },
      });
      return { success: true, weaknesses: weaknesses };
    } catch (error) {
      console.error("Error fetching weaknesses:", error);
      return { success: false, message: "An error occurred while fetching weaknesses" };
    }
  },

  async editWeakness(id, value, departmentId) {
    try {
      const updatedWeakness = await prisma.weakness.update({
        where: { id: id },
        data: { value: value },
      });
      return { success: true, updatedWeakness: updatedWeakness };
    } catch (error) {
      console.error("Error updating weakness:", error);
      return { success: false, message: "An error occurred while updating weakness" };
    }
  },

  async deleteWeakness(id, departmentId) {
    try {
      await prisma.weakness.delete({ where: { id: id } });
      return { success: true, message: "Weakness deleted successfully" };
    } catch (error) {
      console.error("Error deleting weakness:", error);
      return { success: false, message: "An error occurred while deleting weakness" };
    }
  },

  async addOpportunity(value, departmentId) {
    try {
      const addedOpportunity = await prisma.opportunity.create({
        data: {
          value: value,
          department: { connect: { id: departmentId } },
        },
      });
      return { success: true, data: addedOpportunity };
    } catch (error) {
      console.error("Error adding opportunity:", error);
      return { success: false, message: "An error occurred while adding opportunity" };
    }
  },

  async getOpportunitiesByDepartmentId(departmentId) {
    try {
      const opportunities = await prisma.opportunity.findMany({
        where: { departmentId: departmentId },
        select: { id: true, value: true },
      });
      return { success: true, opportunities: opportunities };
    } catch (error) {
      console.error("Error fetching opportunities:", error);
      return { success: false, message: "An error occurred while fetching opportunities" };
    }
  },

  async editOpportunity(id, value, departmentId) {
    try {
      const updatedOpportunity = await prisma.opportunity.update({
        where: { id: id },
        data: { value: value },
      });
      return { success: true, updatedOpportunity: updatedOpportunity };
    } catch (error) {
      console.error("Error updating opportunity:", error);
      return { success: false, message: "An error occurred while updating opportunity" };
    }
  },

  async deleteOpportunity(id, departmentId) {
    try {
      await prisma.opportunity.delete({ where: { id: id } });
      return { success: true, message: "Opportunity deleted successfully" };
    } catch (error) {
      console.error("Error deleting opportunity:", error);
      return { success: false, message: "An error occurred while deleting opportunity" };
    }
  },

  async addThreat(value, departmentId) {
    try {
      const addedThreat = await prisma.threat.create({
        data: {
          value: value,
          department: { connect: { id: departmentId } },
        },
      });
      return { success: true, data: addedThreat };
    } catch (error) {
      console.error("Error adding threat:", error);
      return { success: false, message: "An error occurred while adding threat" };
    }
  },

  async getThreatsByDepartmentId(departmentId) {
    try {
      const threats = await prisma.threat.findMany({
        where: { departmentId: departmentId },
        select: { id: true, value: true },
      });
      return { success: true, threats: threats };
    } catch (error) {
      console.error("Error fetching threats:", error);
      return { success: false, message: "An error occurred while fetching threats" };
    }
  },

  async editThreat(id, value, departmentId) {
    try {
      const updatedThreat = await prisma.threat.update({
        where: { id: id },
        data: { value: value },
      });
      return { success: true, updatedThreat: updatedThreat };
    } catch (error) {
      console.error("Error updating threat:", error);
      return { success: false, message: "An error occurred while updating threat" };
    }
  },

  async deleteThreat(id, departmentId) {
    try {
      await prisma.threat.delete({ where: { id: id } });
      return { success: true, message: "Threat deleted successfully" };
    } catch (error) {
      console.error("Error deleting threat:", error);
      return { success: false, message: "An error occurred while deleting threat" };
    }
  },
};

export default Swot;
