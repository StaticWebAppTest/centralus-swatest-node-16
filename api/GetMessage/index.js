module.exports = async function (context, req) {
  const date = "2025-03-02T09:11:27.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

