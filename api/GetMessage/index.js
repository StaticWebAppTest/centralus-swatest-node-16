module.exports = async function (context, req) {
  const date = "2025-05-01T09:13:44.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

