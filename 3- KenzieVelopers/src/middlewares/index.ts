import handleError from "./handleError.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import verifyDeveloperIdParams from "./verifyDeveloperIdParams.middleware";
import verifyInfosExists from "./verifyInfosExists.middleware";
import verifyOsValid from "./verifyOsValid.middleware";
import verifyDeveloperIdBody from "./verifyDeveloperIdBody.middleware";
import verifyProjectIdParams from "./verifyProjectIdParams.middleware";

export default {
  handleError,
  uniqueEmail,
  verifyDeveloperIdParams,
  verifyInfosExists,
  verifyOsValid,
  verifyDeveloperIdBody,
  verifyProjectIdParams,
};
