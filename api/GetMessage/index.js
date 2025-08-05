module.exports = async function (context, req) {
  const date = "2025-08-05T10:16:15.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

