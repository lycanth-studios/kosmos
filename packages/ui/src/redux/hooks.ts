import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RootState, store } from "./store";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
