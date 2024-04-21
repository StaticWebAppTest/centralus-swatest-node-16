module.exports = async function (context, req) {
  const date = "2024-04-21T20:09:51.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

