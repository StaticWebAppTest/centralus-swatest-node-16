module.exports = async function (context, req) {
  const date = "2024-04-02T03:11:00.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

