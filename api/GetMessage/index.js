module.exports = async function (context, req) {
  const date = "2024-04-17T17:08:17.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

