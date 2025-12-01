module.exports = async function (context, req) {
  const date = "2025-12-01T06:24:21.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

