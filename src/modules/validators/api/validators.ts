import { axios as axiosSDK } from "@/libs/axios";
import { ResponseValidatorsLatest } from "./validators.types";
import { ValidatorResponse } from "./validator.interface";
import axios from "axios";

const getValidatorsLatest = () => {
  return axiosSDK.get<ResponseValidatorsLatest>(`/validatorsets/latest`);
};

const getValidatorsDirectoryAll = () => {
  return axios.get<ValidatorResponse>(
    `https://validators.cosmos.directory/chains/cosmoshub`
  );
};

export const validatorsAPI = {
  getValidatorsLatest,
  getValidatorsDirectoryAll,
};
