module.exports = async function (context, req) {
  const date = "2025-02-02T09:10:16.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

