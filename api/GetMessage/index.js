module.exports = async function (context, req) {
  const date = "2025-06-27T03:15:09.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

