module.exports = async function (context, req) {
  const date = "2025-10-26T23:12:03.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

