module.exports = async function (context, req) {
  const date = "2025-01-12T09:10:29.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

