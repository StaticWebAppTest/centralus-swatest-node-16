module.exports = async function (context, req) {
  const date = "2025-01-02T06:16:43.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

