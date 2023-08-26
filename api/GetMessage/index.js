module.exports = async function (context, req) {
  const date = "2023-08-26T20:08:14.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

