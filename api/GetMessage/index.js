module.exports = async function (context, req) {
  const date = "2023-09-03T19:06:20.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

