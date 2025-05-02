module.exports = async function (context, req) {
  const date = "2025-05-02T17:11:32.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

