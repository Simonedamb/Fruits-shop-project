-- CreateTable
CREATE TABLE "Nutrition" (
    "Fruits_id" SERIAL NOT NULL,
    "carbohydrates" DECIMAL(5,2) NOT NULL,
    "protein" DECIMAL(5,2) NOT NULL,
    "fath" DECIMAL(5,2) NOT NULL,
    "calories" DECIMAL(5,2) NOT NULL,
    "sugar" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("Fruits_id")
);

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_Fruits_id_fkey" FOREIGN KEY ("Fruits_id") REFERENCES "Fruits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
