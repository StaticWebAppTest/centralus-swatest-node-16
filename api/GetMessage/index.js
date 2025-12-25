module.exports = async function (context, req) {
  const date = "2025-12-25T08:20:15.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

