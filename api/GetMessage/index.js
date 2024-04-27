module.exports = async function (context, req) {
  const date = "2024-04-27T03:10:52.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

