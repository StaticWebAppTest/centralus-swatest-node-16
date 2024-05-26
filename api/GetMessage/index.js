module.exports = async function (context, req) {
  const date = "2024-05-26T02:29:09.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

