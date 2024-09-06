module.exports = async function (context, req) {
  const date = "2024-09-06T16:13:27.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

