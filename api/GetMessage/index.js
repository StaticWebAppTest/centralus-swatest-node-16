module.exports = async function (context, req) {
  const date = "2025-01-22T05:11:32.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

