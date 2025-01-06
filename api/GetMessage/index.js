module.exports = async function (context, req) {
  const date = "2025-01-06T08:16:12.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

