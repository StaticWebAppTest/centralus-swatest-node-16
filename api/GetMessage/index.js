module.exports = async function (context, req) {
  const date = "2023-10-05T20:09:26.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

