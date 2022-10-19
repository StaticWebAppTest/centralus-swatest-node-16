module.exports = async function (context, req) {
  const date = "2022-10-19T08:26:12.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

