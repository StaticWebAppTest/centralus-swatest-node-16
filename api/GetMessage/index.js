module.exports = async function (context, req) {
  const date = "2025-01-18T19:07:53.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

