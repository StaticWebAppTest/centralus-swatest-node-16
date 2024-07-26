module.exports = async function (context, req) {
  const date = "2024-07-26T16:13:13.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

