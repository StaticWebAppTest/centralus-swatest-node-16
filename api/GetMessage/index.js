module.exports = async function (context, req) {
  const date = "2023-12-12T03:10:22.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

