module.exports = async function (context, req) {
  const date = "2023-01-28T22:08:05.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

