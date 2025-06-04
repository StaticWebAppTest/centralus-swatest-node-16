module.exports = async function (context, req) {
  const date = "2025-06-04T12:27:44.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

