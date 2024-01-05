module.exports = async function (context, req) {
  const date = "2024-01-05T15:09:08.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

