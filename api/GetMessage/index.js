module.exports = async function (context, req) {
  const date = "2025-02-25T13:20:26.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

