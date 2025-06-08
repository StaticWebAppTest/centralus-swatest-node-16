module.exports = async function (context, req) {
  const date = "2025-06-08T09:12:23.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

