module.exports = async function (context, req) {
  const date = "2025-05-10T02:59:36.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

