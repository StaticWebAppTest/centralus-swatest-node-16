module.exports = async function (context, req) {
  const date = "2024-04-03T22:08:14.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

