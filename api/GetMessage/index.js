module.exports = async function (context, req) {
  const date = "2025-11-23T14:11:28.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

