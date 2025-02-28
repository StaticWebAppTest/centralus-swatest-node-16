module.exports = async function (context, req) {
  const date = "2025-02-28T14:11:34.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

