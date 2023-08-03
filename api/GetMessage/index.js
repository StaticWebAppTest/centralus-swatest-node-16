module.exports = async function (context, req) {
  const date = "2023-08-03T12:17:26.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

