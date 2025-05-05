module.exports = async function (context, req) {
  const date = "2025-05-05T10:14:52.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

