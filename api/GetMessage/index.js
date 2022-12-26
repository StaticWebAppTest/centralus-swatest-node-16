module.exports = async function (context, req) {
  const date = "2022-12-26T21:08:13.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

