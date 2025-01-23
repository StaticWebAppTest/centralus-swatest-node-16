module.exports = async function (context, req) {
  const date = "2025-01-23T10:12:35.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

