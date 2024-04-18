import {validateLogin} from "../controllers/login.js";
import {animationColumnBar} from "../controllers/homePage.js";

validateLogin('userInput','passwordInput','buttonLogin')
animationColumnBar('.buttons', '.labels', '#columnBar');

