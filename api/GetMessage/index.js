module.exports = async function (context, req) {
  const date = "2025-11-27T06:22:19.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

