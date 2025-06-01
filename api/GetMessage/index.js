module.exports = async function (context, req) {
  const date = "2025-06-01T06:18:50.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

