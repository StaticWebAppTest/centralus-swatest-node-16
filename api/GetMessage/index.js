module.exports = async function (context, req) {
  const date = "2023-04-11T19:07:02.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

