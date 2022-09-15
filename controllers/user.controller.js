const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("../models/Product.model");

module.exports.usersController = {
  addUser: async (req, res) => {
    const { login, password } = req.body;
    try {
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({ login: login, password: hash });
      res.json(user);
    } catch (error) {
      res.json({ error: error + "asdasdasdasdas" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (!candidate) {
        return res.status(401).json("Неверный логин");
      }

      const valid = await bcrypt.compareSync(password, candidate.password);
      if (!valid) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };
      const name = candidate._id;

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      res.json({ token, name });
    } catch (error) {
      res.json(error);
    }
  },
  addInBasket: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.body.userId, {
        $addToSet: { basket: req.body.productId },
      }).populate("basket");
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  removeFromBasket: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.body.userId, {
        $pull: { basket: req.body.productId },
      }).populate("basket");
      const product = await Product.findByIdAndUpdate(req.body.productId, {
        countInBasket: 1
      })
      res.json(product);
    } catch (e) {
      res.json(e);
    }
  },
  getBasket: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId).populate("basket");
      res.json(user)
    } catch (e) {
        res.json(e)
    }
  },

};
