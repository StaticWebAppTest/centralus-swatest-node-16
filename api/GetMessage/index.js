module.exports = async function (context, req) {
  const date = "2025-12-02T17:17:37.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

