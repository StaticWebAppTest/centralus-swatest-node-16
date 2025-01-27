module.exports = async function (context, req) {
  const date = "2025-01-27T19:09:04.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

