module.exports = async function (context, req) {
  const date = "2025-01-13T15:13:12.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

