module.exports = async function (context, req) {
  const date = "2024-01-27T10:07:50.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

