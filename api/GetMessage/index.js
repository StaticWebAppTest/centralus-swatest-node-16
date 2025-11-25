module.exports = async function (context, req) {
  const date = "2025-11-25T14:14:22.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

