module.exports = async function (context, req) {
  const date = "2024-04-21T19:08:37.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

