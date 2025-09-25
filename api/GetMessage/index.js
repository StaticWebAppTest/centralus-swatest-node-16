module.exports = async function (context, req) {
  const date = "2025-09-25T02:56:44.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

