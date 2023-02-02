module.exports = async function (context, req) {
  const date = "2023-02-02T11:08:13.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

