module.exports = async function (context, req) {
  const date = "2025-02-14T14:10:47.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

