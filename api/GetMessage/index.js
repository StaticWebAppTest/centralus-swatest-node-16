module.exports = async function (context, req) {
  const date = "2025-01-08T18:16:13.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

