module.exports = async function (context, req) {
  const date = "2025-01-25T23:11:31.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

