module.exports = async function (context, req) {
  const date = "2025-01-31T10:12:03.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

