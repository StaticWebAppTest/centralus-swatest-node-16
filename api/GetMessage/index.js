module.exports = async function (context, req) {
  const date = "2023-04-18T12:17:10.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

