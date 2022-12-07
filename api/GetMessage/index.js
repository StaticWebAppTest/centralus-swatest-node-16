module.exports = async function (context, req) {
  const date = "2022-12-07T05:09:11.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

