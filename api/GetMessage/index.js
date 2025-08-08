module.exports = async function (context, req) {
  const date = "2025-08-08T09:20:26.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

