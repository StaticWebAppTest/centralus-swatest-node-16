module.exports = async function (context, req) {
  const date = "2025-04-13T10:13:18.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

