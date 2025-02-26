module.exports = async function (context, req) {
  const date = "2025-02-26T13:20:11.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

