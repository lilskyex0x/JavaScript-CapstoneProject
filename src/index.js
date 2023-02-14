import _ from "lodash";
import './style.css';

import createFoodList from "./modules/fetchApi";
document.addEventListener('DOMContentLoaded', () => {
    createFoodList();
  });
