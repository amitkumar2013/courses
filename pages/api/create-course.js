import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  // await prisma.course.create({
  //   data: {
  //     title: 'Learning to code!',
  //     description: 'Definitely learn the design',
  //     price: 32,
  //     slug: 'relevant',
  //     lessons: {
  //       create: {
  //         title: 'Learn the terminal',
  //         description: 'Definitely learn the term',
  //         videoUrl: 'https://tinyurl.com/wp-tinyurl',
  //         slug: 'popular',
  //       },
  //     },
  //   },
  // });
  // const courses = await prisma.course.findMany({
  //   include: {
  //     lessons: true,
  //   },
  // });
  // res.send(courses);
  res.send('This is only here as a guide!');
};
