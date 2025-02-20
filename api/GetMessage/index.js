module.exports = async function (context, req) {
  const date = "2025-02-20T04:14:27.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

