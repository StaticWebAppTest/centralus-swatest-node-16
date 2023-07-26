module.exports = async function (context, req) {
  const date = "2023-07-26T15:08:48.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

