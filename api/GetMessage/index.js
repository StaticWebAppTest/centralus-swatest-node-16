module.exports = async function (context, req) {
  const date = "2023-04-17T00:48:26.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

