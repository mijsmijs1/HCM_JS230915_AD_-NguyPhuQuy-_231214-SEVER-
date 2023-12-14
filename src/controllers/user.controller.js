import { userModel } from "../models/user.model";

export const userController = {
    findAll: async (req, res) => {
        try {
            let { data, message, status } = await userModel.findAll();
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            }
            else {
                throw {
                    message: "Loi he thong!"
                }
            }
        } catch (err) {
            console.log("err", err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
                data
            })
        }
    },
    create: async (req, res) => {
        try {
            let { data, message, status } = await userModel.create(req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Loi he thong!"
                }
            }
        } catch (err) {
            console.log("err", err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
                data
            })
        }
    },
    update: async (req, res) => {
        try {
            let { data, message, status } = await userModel.update(req.params.id, req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Loi he thong!"
                }
            }
        } catch (err) {
            console.log("err", err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
                data
            })
        }
    },
    delete: async (req, res) => {
        try {
            let { data, message, status } = await userModel.delete(req.params.id);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Loi he thong!"
                }
            }
        } catch (err) {
            console.log("err", err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
                data
            })
        }
    }
}