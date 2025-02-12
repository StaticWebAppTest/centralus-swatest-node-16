module.exports = async function (context, req) {
  const date = "2025-02-12T09:12:47.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

