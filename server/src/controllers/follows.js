const { tb_users, tb_followers, tb_follows } = require('../../models');

exports.getFollowers = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await tb_followers.findAll({
      where: {
        user_id: id,
      },
      include: {
        model: tb_users,
        as: "follower",
        attributes: {
          exclude: ["email", "password", "bio", "createdAt", "updatedAt"]
        }
      },
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"]
      }
    });

    res.send({
      status: "success",
      data: {
        Followers: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getFollowing = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await tb_follows.findAll({
      where: {
        user_id: id,
      },
      include: {
        model: tb_users,
        as: "user",
        attributes: {
          exclude: ["email", "password", "bio", "createdAt", "updatedAt"]
        }
      },
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"]
      }
    });

    res.send({
      status: "success",
      data: {
        Following: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addFollowUser = async (req, res) => {
  const target = req.params.id
  const {id} = req.user

  try {
    await tb_followers.create({user_id: target, follower_id: id})

    await tb_follows.create({user_id: id, following_id: target})

    res.status(200).send({
      message: "Follow Success"
    })
  } catch (error) {
    res.status(400).send({
      message: "Failed"
    })
  }
}

exports.followersCount = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await tb_followers.count({
      where: {
        user_id: id,
      },
    });

    res.send({
      status: "success",
      data: {
        followers: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.followingCount = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await tb_follows.count({
      where: {
        user_id: id,
      },
    });

    res.send({
      status: "success",
      data: {
        following: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};