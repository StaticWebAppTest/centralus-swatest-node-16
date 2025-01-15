module.exports = async function (context, req) {
  const date = "2025-01-15T21:10:22.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

