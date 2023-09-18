module.exports = async function (context, req) {
  const date = "2023-09-18T12:17:11.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

