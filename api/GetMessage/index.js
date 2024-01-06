module.exports = async function (context, req) {
  const date = "2024-01-06T01:49:08.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

