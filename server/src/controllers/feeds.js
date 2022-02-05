const { tb_feeds, tb_users, tb_follows, sequelize } = require("../../models")

exports.addFeed = async (req, res) => {
  const data = req.body
  const fileName = req.file.filename

  try {
  const newFeed = await tb_feeds.create({
    ...data,
    fileName,
    user_id: req.user.id
  });

  let feedData = await tb_feeds.findOne({
    where: {
      id: newFeed.id
    },
    include: {
      model: tb_users,
      as: "uploader",
      attributes: {
        exclude: ["email", "password", "bio", "createdAt", "updatedAt"]
      }
    },
    attributes: {
      exclude: ["user_id", "updatedAt", "createdAt"]
    }
  })

  feedData = JSON.parse(JSON.stringify(feedData));

  feedData = {
    ...feedData,
    fileName: process.env.FILE_PATH + feedData.fileName
  }

    res.send({
      status: "success",
      message: "Add feed finished",
      data: {
        feed: feedData
      }
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
}

exports.getFollowedFeed = async (req, res) => {
  const { id } = req.params

  try {

    let following = await tb_follows.findAll({
      where: {
        user_id: id
      }
    });

    following = following.map((creator) => {
      return creator.following_id
    })

    let feeds = await tb_feeds.findAll({
        where: {
          user_id: following
        },
        include: {
          model: tb_users,
          as: "uploader",
          attributes: {
            exclude: ["email", "password", "bio", "createdAt", "updatedAt"]
          }
        },
        attributes: {
          exclude: ["user_id", "createdAt", "updatedAt"]
        }
      })
  
      feeds = JSON.parse(JSON.stringify(feeds))
  
      feeds = feeds.map((item) => {
        return {
          ...item,
          fileName: process.env.FILE_PATH + item.fileName
        }
      })

    res.status(200).send({
      status: "success",
      data: {
        feed: feeds
      }
    })
  } catch (error) {
    res.status(400).send({
      message: "Server error"
    })
  }
}

exports.getFeeds = async (req, res) => {

  try {
    let feeds = await tb_feeds.findAll({
      include: {
        model: tb_users,
        as: "uploader",
        attributes: {
          exclude: ["email", "password", "bio", "createdAt", "updatedAt"]
        }
      },
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"]
      },
      order: sequelize.random()
    })

    feeds = JSON.parse(JSON.stringify(feeds))

    feeds = feeds.map((item) => {
      return {
        ...item,
        fileName: process.env.FILE_PATH + item.fileName
      }
    })

    res.status(200).send({
      status: "success",
      data: {
        feed: feeds
      }
    })

  } catch (error) {
    res.status(500).send({
      message: "Error loading feeds"
    })
  }
}

exports.getFeedsUser = async (req, res) => {

  try {

    let { id } = req.params

    let feeds = await tb_feeds.findAll({
      where: {
        user_id: id,
      },
      include: {
        model: tb_users,
        as: "uploader",
        attributes: {
          exclude: ["email", "password", "bio", "createdAt", "updatedAt"]
        }
      },
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"]
      },
      order: sequelize.random()
    })

    feeds = JSON.parse(JSON.stringify(feeds))

    feeds = feeds.map((item) => {
      return {
        ...item,
        fileName: process.env.FILE_PATH + item.fileName
      }
    })

    res.status(200).send({
      status: "success",
      data: {
        feed: feeds
      }
    })

  } catch (error) {
    res.status(500).send({
      message: "Error loading feeds"
    })
  }
}

exports.countFeedsUser = async (req, res) => {

  try {

    let { id } = req.params

    let feeds = await tb_feeds.count({
      where: {
        user_id: id,
      },
    })

    // feeds = JSON.parse(JSON.stringify(feeds))

    // feeds = feeds.map((item) => {
    //   return {
    //     ...item,
    //     fileName: process.env.FILE_PATH + item.fileName
    //   }
    // })

    res.status(200).send({
      status: "success",
      data: {
        feed: feeds
      }
    })

  } catch (error) {
    res.status(500).send({
      message: "Error loading feeds"
    })
  }
}