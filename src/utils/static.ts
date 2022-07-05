import React from "react";
import { PagesContextType } from "./types";

export const PagesContext = React.createContext<PagesContextType>([ 0, undefined, () => {}]);