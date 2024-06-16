module.exports = async function (context, req) {
  const date = "2024-06-16T14:08:39.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

