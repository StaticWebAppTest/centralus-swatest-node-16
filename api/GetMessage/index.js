module.exports = async function (context, req) {
  const date = "2022-04-15T02:56:46.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

