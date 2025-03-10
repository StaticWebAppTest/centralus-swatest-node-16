module.exports = async function (context, req) {
  const date = "2025-03-10T06:14:48.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

