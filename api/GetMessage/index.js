module.exports = async function (context, req) {
  const date = "2023-02-01T18:12:04.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

