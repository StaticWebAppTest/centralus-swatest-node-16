module.exports = async function (context, req) {
  const date = "2025-09-30T03:27:00.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

