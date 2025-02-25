module.exports = async function (context, req) {
  const date = "2025-02-25T17:13:37.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

