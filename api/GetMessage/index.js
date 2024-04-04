module.exports = async function (context, req) {
  const date = "2024-04-04T19:08:23.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

