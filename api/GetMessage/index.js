module.exports = async function (context, req) {
  const date = "2024-08-20T06:14:43.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

