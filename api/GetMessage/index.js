module.exports = async function (context, req) {
  const date = "2023-04-16T20:08:49.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

