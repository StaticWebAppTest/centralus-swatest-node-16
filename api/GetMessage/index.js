module.exports = async function (context, req) {
  const date = "2025-12-25T01:10:15.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

