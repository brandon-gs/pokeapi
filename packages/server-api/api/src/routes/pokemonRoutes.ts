/**
 * Default baseUrl for this endpoints
 * @url /api/pokemon
 */

import { Router } from "express";

import {
  savePokemonCaptured,
  getPokemonsCaptured,
} from "../controllers/pokemonController";

const router = Router();

router.route("/").post(savePokemonCaptured);

router.route("/:username").get(getPokemonsCaptured);

export default router;
