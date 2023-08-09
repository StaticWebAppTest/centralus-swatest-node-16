module.exports = async function (context, req) {
  const date = "2023-08-09T02:26:55.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

