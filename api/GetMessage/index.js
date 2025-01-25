module.exports = async function (context, req) {
  const date = "2025-01-25T16:13:07.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

