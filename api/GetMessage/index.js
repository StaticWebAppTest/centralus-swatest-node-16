module.exports = async function (context, req) {
  const date = "2023-02-08T00:52:38.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

