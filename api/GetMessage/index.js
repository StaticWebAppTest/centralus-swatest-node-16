module.exports = async function (context, req) {
  const date = "2022-11-13T10:11:35.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

