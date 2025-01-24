module.exports = async function (context, req) {
  const date = "2025-01-24T09:12:22.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

