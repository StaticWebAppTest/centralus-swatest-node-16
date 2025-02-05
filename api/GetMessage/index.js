module.exports = async function (context, req) {
  const date = "2025-02-05T10:12:27.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

