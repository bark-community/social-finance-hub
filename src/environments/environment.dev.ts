import { EnvironmentConfig } from "../app/models";
import { EnvironmentName } from "../app/enums";
import { getBaseConfig } from "./base-config";

export const environment: EnvironmentConfig = {
  name: EnvironmentName.Development,
  production: false,
  solanaEnv: 'devnet',
  solanaCluster: 'https://devnet.helius-rpc.com/?api-key=43acd58f-d760-4b28-a418-762dc9aba97e',
  apiUrl: "https://dev-api.barkprotocol.app",
  platformFeeCollector:'BRKRS5C522PrBK91DpcKWhiDXUwkA69b4oeYaUCff2eR',
  platformATAbSOLFeeCollector:'BRKRS5C522PrBK91DpcKWhiDXUwkA69b4oeYaUCff2eR',
  turnStile: '0x4AAAAAAAWLe07W81onsc2Q',
  ...getBaseConfig()
};
