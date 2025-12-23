module.exports = async function (context, req) {
  const date = "2025-12-23T15:15:26.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

