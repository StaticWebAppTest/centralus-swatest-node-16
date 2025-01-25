module.exports = async function (context, req) {
  const date = "2025-01-25T09:11:34.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

