module.exports = async function (context, req) {
  const date = "2023-01-15T23:09:23.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

