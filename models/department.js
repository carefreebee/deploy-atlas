// models/department.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Department = {
  async department_register(department) {
    try {
      await prisma.department.create({
        data: {
          department_name: department,
        },
      });
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getAllDepartments() {
    try {
      return await prisma.department.findMany();
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async getDepartmentIdByName(department) {
    try {
      const result = await prisma.department.findUnique({
        where: {
          department_name: department,
        },
      });
      return result ? result.id : null;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async findById(id) {
    try {
      return await prisma.department.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async updateDepartmentDetails(id, data) {
    try {
      return await prisma.department.update({
        where: {
          id: id,
        },
        data: {
          ...data,
        },
      });
    } catch (error) {
      console.error("Error updating department details:", error);
      throw new Error("An error occurred while updating department details.");
    }
  },

  async getDepartmentDetailsById(id) {
    try {
      return await prisma.department.findUnique({
        where: {
          id: id,
        },
        include: {
          users: true,
          department_images: true,
          inputgoals: true,
          opportunities: true,
          strengths: true,
          threats: true,
          weaknesses: true,
          w_tstrats: true,
          s_tstrats: true,
          s_ostrats: true,
          w_ostrats: true,
          financial_entities: true,
          stakeholder_entities: true,
          internal_process_entities: true,
          learning_growth_entities: true,
          financial_bscs: true,
          internal_bscs: true,
          learning_bscs: true,
          stakeholder_bscs: true,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },

  async imageExists(department_id) {
    try {
      const result = await prisma.departmentImage.findFirst({
        where: {
          department_id: department_id,
        },
      });
      return result !== null;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async insertDepartmentImage(department_id, imageData, imageFormat) {
    try {
      await prisma.departmentImage.create({
        data: {
          department_id: department_id,
          image: imageData,
          image_format: imageFormat,
        },
      });
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async updateDepartmentImage(department_id, imageData, imageFormat) {
    try {
      await prisma.departmentImage.update({
        where: {
          department_id: department_id,
        },
        data: {
          image: imageData,
          image_format: imageFormat,
        },
      });
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  },

  async getDepartmentImage(department_id) {
    try {
      const result = await prisma.departmentImage.findFirst({
        where: {
          department_id: department_id,
        },
      });

      if (result !== null) {
        return {
          imageData: result.image,
          imageFormat: result.image_format,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while querying the database.");
    }
  },
};

export default Department;
