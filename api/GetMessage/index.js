module.exports = async function (context, req) {
  const date = "2022-08-13T03:42:49.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

