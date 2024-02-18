module.exports = async function (context, req) {
  const date = "2024-02-18T07:10:12.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

