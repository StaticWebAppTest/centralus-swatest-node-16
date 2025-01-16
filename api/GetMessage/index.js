module.exports = async function (context, req) {
  const date = "2025-01-16T14:10:25.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

