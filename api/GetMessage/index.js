module.exports = async function (context, req) {
  const date = "2025-01-16T08:14:44.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

