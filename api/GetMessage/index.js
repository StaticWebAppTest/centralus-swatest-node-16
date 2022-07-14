module.exports = async function (context, req) {
  const date = "2022-07-14T22:13:05.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

