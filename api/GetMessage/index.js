module.exports = async function (context, req) {
  const date = "2024-12-02T03:00:04.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

