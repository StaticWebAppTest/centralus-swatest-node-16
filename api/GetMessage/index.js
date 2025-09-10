module.exports = async function (context, req) {
  const date = "2025-09-10T10:13:07.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

