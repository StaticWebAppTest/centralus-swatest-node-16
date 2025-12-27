module.exports = async function (context, req) {
  const date = "2025-12-27T05:15:30.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

