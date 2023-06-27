import handleError from "./handleError.middleware";
import validateBody from "./validateBody.middleware";
import verifyIdExists from "./verifyIdExists.middleware";
import verifyNameExists from "./verifyNameExists.middleware";
import pagination from "./pagination.middleware";

export default { handleError, validateBody, verifyIdExists, verifyNameExists, pagination };
