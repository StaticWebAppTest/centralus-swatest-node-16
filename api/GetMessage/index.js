module.exports = async function (context, req) {
  const date = "2023-04-15T05:07:58.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

