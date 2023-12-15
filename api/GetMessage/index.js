module.exports = async function (context, req) {
  const date = "2023-12-15T02:24:22.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

