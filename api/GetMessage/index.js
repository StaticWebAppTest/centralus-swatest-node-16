module.exports = async function (context, req) {
  const date = "2024-05-05T03:10:05.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

