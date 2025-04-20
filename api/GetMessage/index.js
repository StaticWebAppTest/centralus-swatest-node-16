module.exports = async function (context, req) {
  const date = "2025-04-20T20:13:04.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

