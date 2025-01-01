module.exports = async function (context, req) {
  const date = "2025-01-01T16:13:34.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

