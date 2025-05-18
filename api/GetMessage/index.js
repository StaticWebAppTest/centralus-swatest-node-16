module.exports = async function (context, req) {
  const date = "2025-05-18T09:12:24.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

