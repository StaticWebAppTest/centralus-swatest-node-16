module.exports = async function (context, req) {
  const date = "2025-05-23T23:12:51.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

