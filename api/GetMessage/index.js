module.exports = async function (context, req) {
  const date = "2024-12-27T02:14:43.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

