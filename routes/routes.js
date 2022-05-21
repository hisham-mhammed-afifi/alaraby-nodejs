const express = require("express");
const router = express.Router();

const Answer = require("../models/Answer");
const Factory = require("../models/Factory");
const Group = require("../models/Group");
const Machine = require("../models/Machine");
const MachineCategory = require("../models/MachineCategory");
const Model = require("../models/Model");
const Question = require("../models/Question");
const Request = require("../models/Request");
const Role = require("../models/Role");
const User = require("../models/User");

// answers
router
  .route("/answers")
  .get(async (req, res) => {
    const answers = await Answer.find({});
    res.status(200).json(answers);
  })
  .post(async (req, res) => {
    const { name, questionId } = req.body;
    await Answer.create({ name, questionId });
    res.status(201).json({ msg: "added" });
  });

// factories
router
  .route("/factories")
  .get(async (req, res) => {
    const factories = await Factory.find({});
    res.status(200).json(factories);
  })
  .post(async (req, res) => {
    const { name } = req.body;
    await Factory.create({ name });
    res.status(201).json({ msg: "added" });
  });

// groups
router
  .route("/groups")
  .get(async (req, res) => {
    const groups = await Group.find({});
    res.status(200).json(groups);
  })
  .post(async (req, res) => {
    const { name, factoryId } = req.body;
    await Group.create({ name, factoryId });
    res.status(201).json({ msg: "added" });
  });

// machines
router
  .route("/machines")
  .get(async (req, res) => {
    const machines = await Machine.find({});
    res.status(200).json(machines);
  })
  .post(async (req, res) => {
    const { name, factoryId } = req.body;
    await Machine.create({ name, factoryId });
    res.status(201).json({ msg: "added" });
  });

// machines category
router
  .route("/machinesCategory")
  .get(async (req, res) => {
    const machinesCategory = await MachineCategory.find({});
    res.status(200).json(machinesCategory);
  })
  .post(async (req, res) => {
    const { name, machineId } = req.body;
    await MachineCategory.create({ name, machineId });
    res.status(201).json({ msg: "added" });
  });

// models
router
  .route("/models")
  .get(async (req, res) => {
    const models = await Model.find({});
    res.status(200).json(models);
  })
  .post(async (req, res) => {
    const { name, machineId, machineCategoryId } = req.body;
    await Model.create({ name, machineId, machineCategoryId });
    res.status(201).json({ msg: "added" });
  });

// questions
router
  .route("/questions")
  .get(async (req, res) => {
    const questions = await Question.find({});
    res.status(200).json(questions);
  })
  .post(async (req, res) => {
    const { name, groupId, factoryId } = req.body;
    const question = await Question.create({ name, groupId, factoryId });
    res.status(201).json(question);
  });

// requests
router
  .route("/requests")
  .get(async (req, res) => {
    const requests = await Request.find({});
    res.status(200).json(requests);
  })
  .post(async (req, res) => {
    const { userId, machineId, feedback, status } = req.body;
    await Request.create({ userId, machineId, feedback, status });
    res.status(201).json({ msg: "added" });
  });

// roles
router
  .route("/roles")
  .get(async (req, res) => {
    const roles = await Role.find({});
    res.status(200).json(roles);
  })
  .post(async (req, res) => {
    const { name } = req.body;
    await Role.create({ name });
    res.status(201).json({ msg: "added" });
  });

// users
router
  .route("/users")
  .get(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
  })
  .post(async (req, res) => {
    const { roleId, username, password, email, factoryId } = req.body;
    const user = await User.create({
      roleId,
      username,
      password,
      email,
      factoryId,
    });
    res.status(201).json(user);
  });

module.exports = router;
