module.exports = async function (context, req) {
  const date = "2023-09-07T05:08:14.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

