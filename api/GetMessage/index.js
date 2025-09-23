module.exports = async function (context, req) {
  const date = "2025-09-23T15:13:13.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

