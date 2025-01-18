module.exports = async function (context, req) {
  const date = "2025-01-18T23:10:19.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

