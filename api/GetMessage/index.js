module.exports = async function (context, req) {
  const date = "2023-04-03T02:26:47.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

