module.exports = async function (context, req) {
  const date = "2022-12-13T06:13:06.170Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

