-- CreateTable
CREATE TABLE "Fruits" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "genus" VARCHAR(255),
    "image" TEXT NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,
    "family" VARCHAR(255),
    "order" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fruits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutrition" (
    "id" SERIAL NOT NULL,
    "carbohydrates" DECIMAL(5,2) NOT NULL,
    "protein" DECIMAL(5,2) NOT NULL,
    "fath" DECIMAL(5,2) NOT NULL,
    "calories" DECIMAL(5,2) NOT NULL,
    "sugar" DECIMAL(5,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fruitsId" INTEGER NOT NULL,

    CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nutrition_fruitsId_key" ON "Nutrition"("fruitsId");

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_fruitsId_fkey" FOREIGN KEY ("fruitsId") REFERENCES "Fruits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
