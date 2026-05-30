import prisma from "../src/prisma.js";

const main = async () => {
  await prisma.project.create({
    data: {
      name: "Project seed",
      description: "Exemple description",
    },
  });
};

main()
  .then(() => {
    console.log("Seed => OK");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
