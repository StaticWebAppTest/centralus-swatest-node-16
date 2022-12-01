module.exports = async function (context, req) {
  const date = "2022-12-01T03:33:54.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

