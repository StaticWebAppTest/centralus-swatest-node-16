module.exports = async function (context, req) {
  const date = "2025-01-08T15:12:13.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

