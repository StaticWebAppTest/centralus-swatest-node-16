module.exports = async function (context, req) {
  const date = "2025-12-10T09:17:52.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

