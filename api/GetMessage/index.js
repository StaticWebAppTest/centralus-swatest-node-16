module.exports = async function (context, req) {
  const date = "2025-04-02T11:10:47.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

