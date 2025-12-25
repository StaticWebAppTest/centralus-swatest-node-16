module.exports = async function (context, req) {
  const date = "2025-12-25T14:13:56.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

