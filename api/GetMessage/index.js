module.exports = async function (context, req) {
  const date = "2022-11-25T03:31:17.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

