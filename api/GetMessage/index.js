module.exports = async function (context, req) {
  const date = "2023-04-20T15:09:10.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

