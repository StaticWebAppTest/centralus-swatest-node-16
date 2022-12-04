module.exports = async function (context, req) {
  const date = "2022-12-04T03:11:26.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

