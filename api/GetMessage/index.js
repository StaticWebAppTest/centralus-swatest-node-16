module.exports = async function (context, req) {
  const date = "2025-01-31T09:11:54.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

