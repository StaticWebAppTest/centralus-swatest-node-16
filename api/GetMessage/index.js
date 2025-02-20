module.exports = async function (context, req) {
  const date = "2025-02-20T08:16:02.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

