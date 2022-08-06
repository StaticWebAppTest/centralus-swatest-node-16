module.exports = async function (context, req) {
  const date = "2022-08-06T19:08:12.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

