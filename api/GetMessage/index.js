module.exports = async function (context, req) {
  const date = "2025-08-28T15:13:35.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

