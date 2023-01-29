module.exports = async function (context, req) {
  const date = "2023-01-29T21:07:39.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

