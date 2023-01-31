module.exports = async function (context, req) {
  const date = "2023-01-31T08:12:57.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

