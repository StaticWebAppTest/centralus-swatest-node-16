module.exports = async function (context, req) {
  const date = "2025-02-06T13:18:54.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

