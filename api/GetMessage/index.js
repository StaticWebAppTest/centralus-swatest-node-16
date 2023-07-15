module.exports = async function (context, req) {
  const date = "2023-07-15T17:07:55.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

