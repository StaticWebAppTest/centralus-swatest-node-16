module.exports = async function (context, req) {
  const date = "2024-01-17T10:10:19.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

