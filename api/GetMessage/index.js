module.exports = async function (context, req) {
  const date = "2025-02-20T14:11:37.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

