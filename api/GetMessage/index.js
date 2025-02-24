module.exports = async function (context, req) {
  const date = "2025-02-24T03:20:00.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

