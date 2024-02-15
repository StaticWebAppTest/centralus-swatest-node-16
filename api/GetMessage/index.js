module.exports = async function (context, req) {
  const date = "2024-02-15T21:07:49.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

