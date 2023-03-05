module.exports = async function (context, req) {
  const date = "2023-03-05T17:08:15.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

