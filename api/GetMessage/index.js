module.exports = async function (context, req) {
  const date = "2025-03-25T16:14:35.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

