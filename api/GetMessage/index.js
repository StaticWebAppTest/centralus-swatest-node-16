module.exports = async function (context, req) {
  const date = "2025-01-17T23:10:33.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

