module.exports = async function (context, req) {
  const date = "2025-12-16T17:18:46.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

