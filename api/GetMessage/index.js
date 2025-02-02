module.exports = async function (context, req) {
  const date = "2025-02-02T16:12:51.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

