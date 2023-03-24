module.exports = async function (context, req) {
  const date = "2023-03-24T11:07:49.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

