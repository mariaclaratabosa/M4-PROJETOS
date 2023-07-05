import { handleError } from "./handleError.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { uniqueAddress } from "./uniqueAddress.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middlewares";
import { verifyCategoryIdExists } from "./verifyCategoryIdExists.middleware";
import { verifyRealEstateIdExists } from "./verifyRealEstateIdExists.middleware";
import { uniqueUserSchedule } from "./uniqueUserSchedule.middleware";
import { verifyHour } from "./verifyHour.middleware";
import { verifyDay } from "./verifyDay.middleware";
import { uniqueSchedule } from "./uniqueSchedule.middleware";

export default {
  handleError,
  verifyIdExists,
  validateBody,
  verifyToken,
  isAdmin,
  uniqueCategory,
  uniqueEmail,
  uniqueAddress,
  isAdminOrOwner,
  verifyCategoryIdExists,
  verifyRealEstateIdExists,
  uniqueUserSchedule,
  verifyHour,
  verifyDay,
  uniqueSchedule,
};
