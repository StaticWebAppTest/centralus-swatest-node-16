module.exports = async function (context, req) {
  const date = "2024-07-18T03:12:27.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

