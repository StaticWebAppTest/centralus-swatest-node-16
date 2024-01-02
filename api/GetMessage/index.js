module.exports = async function (context, req) {
  const date = "2024-01-02T03:09:50.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

