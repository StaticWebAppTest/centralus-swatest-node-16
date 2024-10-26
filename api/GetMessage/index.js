module.exports = async function (context, req) {
  const date = "2024-10-26T10:12:28.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

