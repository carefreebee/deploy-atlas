-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,
    "generatedAiStrats" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "department_name" TEXT NOT NULL,
    "headOfficer" TEXT,
    "departmentLandline" TEXT,
    "location" TEXT,
    "university" TEXT,
    "description" TEXT,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartmentImage" (
    "id" SERIAL NOT NULL,
    "department_id" INTEGER NOT NULL,
    "image" BYTEA,
    "image_format" TEXT,

    CONSTRAINT "DepartmentImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputGoal" (
    "id" SERIAL NOT NULL,
    "vision" TEXT NOT NULL,
    "proposition" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "goals2" TEXT NOT NULL,
    "goals3" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "InputGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opportunity" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Strength" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Strength_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Threat" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Threat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weakness" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Weakness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "W_TStrat" (
    "id" SERIAL NOT NULL,
    "w_tResponses" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "W_TStrat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "S_TStrat" (
    "id" SERIAL NOT NULL,
    "s_tResponses" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "S_TStrat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "S_OStrat" (
    "id" SERIAL NOT NULL,
    "s_oResponses" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "S_OStrat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "W_OStrat" (
    "id" SERIAL NOT NULL,
    "w_oResponses" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "W_OStrat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialEntity" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "FinancialEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StakeholderEntity" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "StakeholderEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternalProcessEntity" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "InternalProcessEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningGrowthEntity" (
    "id" SERIAL NOT NULL,
    "input" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "LearningGrowthEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialBSC" (
    "id" SERIAL NOT NULL,
    "target_code" TEXT,
    "office_target" TEXT,
    "start_date" TIMESTAMP(3),
    "completion_date" TIMESTAMP(3),
    "status" TEXT,
    "key_performance_indicator" TEXT,
    "target_performance" DOUBLE PRECISION,
    "actual_performance" DOUBLE PRECISION,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "FinancialBSC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternalBSC" (
    "id" SERIAL NOT NULL,
    "target_code" TEXT,
    "office_target" TEXT,
    "start_date" TIMESTAMP(3),
    "completion_date" TIMESTAMP(3),
    "status" TEXT,
    "key_performance_indicator" TEXT,
    "target_performance" DOUBLE PRECISION,
    "actual_performance" DOUBLE PRECISION,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "InternalBSC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningBSC" (
    "id" SERIAL NOT NULL,
    "target_code" TEXT,
    "office_target" TEXT,
    "start_date" TIMESTAMP(3),
    "completion_date" TIMESTAMP(3),
    "status" TEXT,
    "key_performance_indicator" TEXT,
    "target_performance" DOUBLE PRECISION,
    "actual_performance" DOUBLE PRECISION,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "LearningBSC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StakeholderBSC" (
    "id" SERIAL NOT NULL,
    "target_code" TEXT,
    "office_target" TEXT,
    "start_date" TIMESTAMP(3),
    "completion_date" TIMESTAMP(3),
    "status" TEXT,
    "key_performance_indicator" TEXT,
    "target_performance" DOUBLE PRECISION,
    "actual_performance" DOUBLE PRECISION,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "StakeholderBSC_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentImage" ADD CONSTRAINT "DepartmentImage_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InputGoal" ADD CONSTRAINT "InputGoal_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opportunity" ADD CONSTRAINT "Opportunity_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Strength" ADD CONSTRAINT "Strength_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Threat" ADD CONSTRAINT "Threat_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weakness" ADD CONSTRAINT "Weakness_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "W_TStrat" ADD CONSTRAINT "W_TStrat_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "S_TStrat" ADD CONSTRAINT "S_TStrat_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "S_OStrat" ADD CONSTRAINT "S_OStrat_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "W_OStrat" ADD CONSTRAINT "W_OStrat_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialEntity" ADD CONSTRAINT "FinancialEntity_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StakeholderEntity" ADD CONSTRAINT "StakeholderEntity_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InternalProcessEntity" ADD CONSTRAINT "InternalProcessEntity_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningGrowthEntity" ADD CONSTRAINT "LearningGrowthEntity_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialBSC" ADD CONSTRAINT "FinancialBSC_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InternalBSC" ADD CONSTRAINT "InternalBSC_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningBSC" ADD CONSTRAINT "LearningBSC_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StakeholderBSC" ADD CONSTRAINT "StakeholderBSC_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
