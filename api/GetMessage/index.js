module.exports = async function (context, req) {
  const date = "2024-01-08T18:12:26.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

