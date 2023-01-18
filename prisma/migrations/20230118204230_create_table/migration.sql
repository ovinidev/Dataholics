-- CreateTable
CREATE TABLE "Counter" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Counter_id_key" ON "Counter"("id");
