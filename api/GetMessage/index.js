module.exports = async function (context, req) {
  const date = "2024-02-05T15:08:45.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

