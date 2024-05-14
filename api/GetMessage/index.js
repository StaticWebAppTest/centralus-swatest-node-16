module.exports = async function (context, req) {
  const date = "2024-05-14T20:11:41.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

