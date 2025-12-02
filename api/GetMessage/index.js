module.exports = async function (context, req) {
  const date = "2025-12-02T13:32:45.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

