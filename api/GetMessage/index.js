module.exports = async function (context, req) {
  const date = "2025-05-27T11:11:39.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

