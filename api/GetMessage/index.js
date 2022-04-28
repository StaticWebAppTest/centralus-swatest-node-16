module.exports = async function (context, req) {
  const date = "2022-04-28T11:09:59.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

