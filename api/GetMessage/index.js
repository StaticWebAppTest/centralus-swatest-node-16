module.exports = async function (context, req) {
  const date = "2024-02-17T12:14:24.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

