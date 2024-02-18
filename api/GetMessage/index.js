module.exports = async function (context, req) {
  const date = "2024-02-18T15:09:03.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

