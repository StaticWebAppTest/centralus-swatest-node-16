module.exports = async function (context, req) {
  const date = "2025-02-21T09:12:28.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

