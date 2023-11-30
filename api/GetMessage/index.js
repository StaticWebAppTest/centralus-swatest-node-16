module.exports = async function (context, req) {
  const date = "2023-11-30T19:06:44.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

