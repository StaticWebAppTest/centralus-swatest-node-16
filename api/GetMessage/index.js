module.exports = async function (context, req) {
  const date = "2025-04-16T10:13:42.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

