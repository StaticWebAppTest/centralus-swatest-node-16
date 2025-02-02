module.exports = async function (context, req) {
  const date = "2025-02-02T19:09:12.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

