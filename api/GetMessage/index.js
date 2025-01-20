module.exports = async function (context, req) {
  const date = "2025-01-20T23:10:25.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

