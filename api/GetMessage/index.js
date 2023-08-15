module.exports = async function (context, req) {
  const date = "2023-08-15T08:11:24.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

