module.exports = async function (context, req) {
  const date = "2025-01-21T21:10:35.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

