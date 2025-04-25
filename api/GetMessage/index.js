module.exports = async function (context, req) {
  const date = "2025-04-25T15:13:22.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

