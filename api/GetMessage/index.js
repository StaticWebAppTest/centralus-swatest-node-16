module.exports = async function (context, req) {
  const date = "2024-05-25T13:09:24.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

