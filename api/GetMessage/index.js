module.exports = async function (context, req) {
  const date = "2025-11-05T09:15:46.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

