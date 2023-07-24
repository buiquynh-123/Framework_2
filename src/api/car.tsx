import { ICar } from "@/interface/Car";
import instance from "./instance";
const addCar = (car: ICar) => {
  return instance.post("cars", car);
};
const getCar = () => {
  return instance.get("cars");
};
const getCarById = (id: any) => {
  return instance.get(`cars/${id}`);
};
const deleteCar = (id: number) => {
  return instance.delete(`cars/${id}`);
};
const updateCar = (product: any) => {
  return instance.put(`cars/${product.id}`, product);
};
export { addCar, getCar, getCarById, deleteCar, updateCar };
