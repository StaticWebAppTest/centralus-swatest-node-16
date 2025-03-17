module.exports = async function (context, req) {
  const date = "2025-03-17T14:12:46.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

