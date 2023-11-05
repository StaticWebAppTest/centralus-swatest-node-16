module.exports = async function (context, req) {
  const date = "2023-11-05T17:07:28.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

