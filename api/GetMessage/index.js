module.exports = async function (context, req) {
  const date = "2025-02-16T12:22:19.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

