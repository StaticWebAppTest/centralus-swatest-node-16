module.exports = async function (context, req) {
  const date = "2022-05-26T10:12:29.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

