module.exports = async function (context, req) {
  const date = "2025-01-23T08:15:33.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

