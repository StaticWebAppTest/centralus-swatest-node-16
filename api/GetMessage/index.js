module.exports = async function (context, req) {
  const date = "2025-12-30T11:13:32.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

