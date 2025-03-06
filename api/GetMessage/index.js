module.exports = async function (context, req) {
  const date = "2025-03-06T08:16:06.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

