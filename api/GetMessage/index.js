module.exports = async function (context, req) {
  const date = "2024-08-05T20:11:11.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

