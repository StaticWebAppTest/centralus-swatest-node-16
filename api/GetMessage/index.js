module.exports = async function (context, req) {
  const date = "2025-01-12T06:15:47.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

