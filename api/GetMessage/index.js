module.exports = async function (context, req) {
  const date = "2025-01-17T15:11:24.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

