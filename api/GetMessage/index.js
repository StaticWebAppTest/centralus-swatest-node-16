module.exports = async function (context, req) {
  const date = "2022-08-21T19:08:59.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

