import passport from "passport";

const passportCall = (
    strategy,
    options = {}) => {
    return (req, res, next) => {
        passport.authenticate(strategy, async (error, user, info) => {
            if (error) return next(error);
            if (!options.strategyType) {
                return res.sendInternalError("undefined");
            }
            if (!user) {
                switch (options.strategyType) {
                    case "LOCALS": { return res.status(401).send({ status: "error", error: info.message ? info.message : info.toString(), }); }
                    case "JWT": {
                        req.user = null;
                        return next();
                    }
                }
            }
            req.user = user;
            next();
        })(req, res, next);
    };
};
export default passportCall;