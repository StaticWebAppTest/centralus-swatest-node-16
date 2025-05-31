module.exports = async function (context, req) {
  const date = "2025-05-31T12:23:39.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

