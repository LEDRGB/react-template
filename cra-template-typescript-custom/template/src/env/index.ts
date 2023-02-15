import development from "./development";
import preview from "./preview";
import production from "./production";


type TEnvName = 'development' | 'preview' | 'production';
const name = 'development';

interface IEnv {
  name: TEnvName;
  apiUrl: string;
}

const env: IEnv = {
  name,
  ...{ development, preview, production }[name],
};
export default env;
