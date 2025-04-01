module.exports = async function (context, req) {
  const date = "2025-04-01T07:13:22.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

