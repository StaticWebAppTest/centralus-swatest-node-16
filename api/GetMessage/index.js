module.exports = async function (context, req) {
  const date = "2025-01-16T07:10:57.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

