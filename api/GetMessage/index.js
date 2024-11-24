module.exports = async function (context, req) {
  const date = "2024-11-24T22:10:40.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

