module.exports = async function (context, req) {
  const date = "2025-01-11T10:11:13.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

