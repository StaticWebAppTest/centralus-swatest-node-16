module.exports = async function (context, req) {
  const date = "2024-12-02T19:10:00.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

