module.exports = async function (context, req) {
  const date = "2024-07-18T21:09:38.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

