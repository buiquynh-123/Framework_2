import { ICar } from "@/interface/Car";
import instance from "./instance";
const addCar = (car: ICar) => {
  return instance.post("cars", car);
};
const getCar = () => {
  return instance.get("cars");
};
const deleteCar = (id: number) => {
  return instance.delete(`cars/${id}`);
};
export { addCar, getCar, deleteCar };
