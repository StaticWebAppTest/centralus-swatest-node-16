module.exports = async function (context, req) {
  const date = "2024-01-18T05:09:32.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

