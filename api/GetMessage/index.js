module.exports = async function (context, req) {
  const date = "2025-01-11T11:08:42.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

