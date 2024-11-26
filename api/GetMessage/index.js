module.exports = async function (context, req) {
  const date = "2024-11-26T21:11:30.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

