module.exports = async function (context, req) {
  const date = "2023-10-07T01:41:45.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

