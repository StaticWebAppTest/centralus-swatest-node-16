module.exports = async function (context, req) {
  const date = "2024-08-20T00:50:43.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

