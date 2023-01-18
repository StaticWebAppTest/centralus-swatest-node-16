module.exports = async function (context, req) {
  const date = "2023-01-18T23:09:29.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

