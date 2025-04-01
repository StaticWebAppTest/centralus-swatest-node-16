module.exports = async function (context, req) {
  const date = "2025-04-01T19:10:21.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

