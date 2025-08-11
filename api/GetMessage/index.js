module.exports = async function (context, req) {
  const date = "2025-08-11T04:37:28.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

