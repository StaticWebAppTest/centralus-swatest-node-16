module.exports = async function (context, req) {
  const date = "2023-11-27T22:07:12.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

