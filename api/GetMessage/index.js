module.exports = async function (context, req) {
  const date = "2022-12-25T22:08:16.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

