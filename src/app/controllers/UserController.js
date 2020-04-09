import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists)
      return res.status(400).json({ error: "User already exists." });

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  async gelAll(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }
}

export default new UserController();
