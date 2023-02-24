module.exports = async function (context, req) {
  const date = "2023-02-24T02:16:18.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

