module.exports = async function (context, req) {
  const date = "2023-08-10T03:09:09.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

