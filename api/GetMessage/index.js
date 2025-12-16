module.exports = async function (context, req) {
  const date = "2025-12-16T15:17:14.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

