module.exports = async function (context, req) {
  const date = "2024-01-24T03:10:20.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

