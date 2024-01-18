module.exports = async function (context, req) {
  const date = "2024-01-18T15:09:38.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

