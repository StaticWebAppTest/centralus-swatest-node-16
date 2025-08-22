module.exports = async function (context, req) {
  const date = "2025-08-22T14:13:07.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

