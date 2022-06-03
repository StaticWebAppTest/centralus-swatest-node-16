module.exports = async function (context, req) {
  const date = "2022-06-03T16:16:23.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

