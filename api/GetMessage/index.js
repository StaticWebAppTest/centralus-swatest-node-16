module.exports = async function (context, req) {
  const date = "2025-06-02T13:27:33.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

