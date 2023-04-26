module.exports = async function (context, req) {
  const date = "2023-04-26T16:11:43.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

