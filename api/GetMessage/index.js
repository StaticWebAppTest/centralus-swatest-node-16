module.exports = async function (context, req) {
  const date = "2024-04-07T20:08:49.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

