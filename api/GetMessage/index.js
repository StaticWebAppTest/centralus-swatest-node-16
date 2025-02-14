module.exports = async function (context, req) {
  const date = "2025-02-14T23:11:29.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

