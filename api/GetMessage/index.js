module.exports = async function (context, req) {
  const date = "2025-04-27T20:13:11.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

