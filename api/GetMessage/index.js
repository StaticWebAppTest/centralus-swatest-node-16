module.exports = async function (context, req) {
  const date = "2025-07-27T09:14:31.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

