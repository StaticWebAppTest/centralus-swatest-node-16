module.exports = async function (context, req) {
  const date = "2025-10-31T10:14:20.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

