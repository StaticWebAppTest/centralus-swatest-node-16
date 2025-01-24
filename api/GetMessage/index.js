module.exports = async function (context, req) {
  const date = "2025-01-24T14:10:45.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

