module.exports = async function (context, req) {
  const date = "2024-09-01T21:09:57.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

