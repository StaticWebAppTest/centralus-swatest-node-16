module.exports = async function (context, req) {
  const date = "2025-05-06T16:15:28.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

