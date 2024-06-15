module.exports = async function (context, req) {
  const date = "2024-06-15T15:10:36.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

