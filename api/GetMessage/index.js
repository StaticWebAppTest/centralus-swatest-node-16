module.exports = async function (context, req) {
  const date = "2025-06-02T18:18:58.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

