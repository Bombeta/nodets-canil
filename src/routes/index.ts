import { Router } from "express";
import { home, dogs, cats, fishes } from "../controllers/pageController";
import { search } from "../controllers/searchController";
const router = Router();

router.get('/', home);
router.get('/dogs', dogs);
router.get('/cats', cats);
router.get('/fishes', fishes);

router.get('/search', search);

// router.get((req, res)=>{
//     res.send({error: 404});
// })

export default router;