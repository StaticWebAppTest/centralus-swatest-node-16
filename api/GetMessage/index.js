module.exports = async function (context, req) {
  const date = "2025-02-27T16:15:45.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

