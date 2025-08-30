module.exports = async function (context, req) {
  const date = "2025-08-30T09:12:07.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

