
interface CouseProps {
  name: string;
  duration?: number;
  educator: string;
};

class CreateCourseService {


  execute({name , duration=8, educator}: CouseProps) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
