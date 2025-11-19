module.exports = async function (context, req) {
  const date = "2025-11-19T16:18:24.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

