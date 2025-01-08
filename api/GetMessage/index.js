module.exports = async function (context, req) {
  const date = "2025-01-08T23:11:03.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

