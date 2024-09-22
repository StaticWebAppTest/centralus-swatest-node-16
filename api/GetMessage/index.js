module.exports = async function (context, req) {
  const date = "2024-09-22T03:18:03.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

